import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepisodesComponent } from './listepisodes.component';

describe('ListepisodesComponent', () => {
  let component: ListepisodesComponent;
  let fixture: ComponentFixture<ListepisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
