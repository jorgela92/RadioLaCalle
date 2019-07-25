import {global} from '@angular/compiler/src/util';

export interface LazyTarget {
  element: Element;
  updateVisibility: (isVisible: boolean, ratio: number) => void;
}

export class LazyViewport {
  private observer: IntersectionObserver;
  private targets: Map<Element, LazyTarget>;

  constructor() {
    this.observer = null;
    this.targets = new Map();
  }

  public addTarget(target: LazyTarget): void {
    if (this.observer) {
      this.targets.set(target.element, target);
      this.observer.observe(target.element);
    } else {
      target.updateVisibility(true, 1.0);
    }
  }

  public setup(element: Element = null, offset: number = 0): void {
    if (!global["IntersectionObserver"]) { return; }
    this.observer = new IntersectionObserver(this.handleIntersectionUpdate, {
        root: element,
        rootMargin: `${offset}px`
      }
    );
  }

  public removeTarget(target: LazyTarget): void {
    if (this.observer) {
      this.targets.delete(target.element);
      this.observer.unobserve(target.element);
    }
  }

  public teardown(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.targets.clear();
    this.targets = null;
  }

  private handleIntersectionUpdate = (entries: IntersectionObserverEntry[]): void => {
    for (const entry of entries) {
      const lazyTarget = this.targets.get(entry.target);
      (lazyTarget) && lazyTarget.updateVisibility(entry.isIntersecting, entry.intersectionRatio);
    }
  }
}
