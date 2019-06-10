import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellprogramComponent } from './cellprogram.component';

describe('CellprogramComponent', () => {
  let component: CellprogramComponent;
  let fixture: ComponentFixture<CellprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
