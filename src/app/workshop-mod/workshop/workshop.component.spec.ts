import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WorkshopComponent } from './workshop.component';
import { WorkshopDetailComponent } from '../workshop-detail/workshop-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WorkshopComponent', () => {
  let component: WorkshopComponent;
  let fixture: ComponentFixture<WorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialsModModule, 
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        WorkshopComponent,
        WorkshopDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
