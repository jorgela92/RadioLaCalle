import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellepisodesComponent } from './cellepisodes.component';

describe('CellepisodesComponent', () => {
  let component: CellepisodesComponent;
  let fixture: ComponentFixture<CellepisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellepisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellepisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
