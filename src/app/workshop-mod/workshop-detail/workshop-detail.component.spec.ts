import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopDetailComponent } from './workshop-detail.component';

describe('WorkshopDetailComponent', () => {
  let component: WorkshopDetailComponent;
  let fixture: ComponentFixture<WorkshopDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
