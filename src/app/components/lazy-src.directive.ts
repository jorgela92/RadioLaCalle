import { Directive } from '@angular/core';
import { ElementRef } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
import { Renderer2 } from "@angular/core";
import {LazyTarget, LazyViewport} from './lazy-viewport';

@Directive({
  selector: '[appLazySrc]',
  inputs: [
    "src: appLazySrc",
    "visibleClass: lazySrcVisible"
  ]
})

export class LazySrcDirective implements OnInit, OnDestroy, LazyTarget {
  public element: Element;
  public src: string;
  public visibleClass: string;
  private lazyViewport: LazyViewport;
  private renderer: Renderer2;

  constructor(elementRef: ElementRef, lazyViewport: LazyViewport, renderer: Renderer2) {
    this.element = elementRef.nativeElement;
    this.lazyViewport = lazyViewport;
    this.renderer = renderer;
    this.src = "";
    this.visibleClass = "";
  }

  public ngOnDestroy(): void {
    (this.lazyViewport) && this.lazyViewport.removeTarget(this);
  }

  public ngOnInit(): void {
    this.lazyViewport.addTarget(this);
  }

  public updateVisibility(isVisible: boolean, ratio: number): void {
    if (!isVisible) {return;}
    this.lazyViewport.removeTarget(this);
    this.lazyViewport = null;
    this.renderer.setProperty(this.element, "src", this.src);
    (this.visibleClass) && this.renderer.addClass(this.element, this.visibleClass);
  }
}
