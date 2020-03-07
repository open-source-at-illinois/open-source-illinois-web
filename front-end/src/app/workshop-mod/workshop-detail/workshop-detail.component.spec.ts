import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WorkshopDetailComponent } from './workshop-detail.component';

describe('WorkshopDetailComponent', () => {
  let component: WorkshopDetailComponent;
  let fixture: ComponentFixture<WorkshopDetailComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialsModModule, HttpClientTestingModule],
      declarations: [ WorkshopDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopDetailComponent);
    component = fixture.componentInstance;
    component.workshop = {
      _id: '12345678901234567890',
      title: 'Mock Workshop',
      description: 'A mock workshop that does not exist',
      date: new Date(8/18/2019),
      location: 'Siebel 1790',
      status: 'active',
      category: 'web development',
      presenter: {      
        _id: "1234567890-",
        email: "thomasdriscoll98@gmail.com",
        firstname: "Thomas",
        github: "thomasdriscoll",
        lastname: "Driscoll",
        picture: "https://mypicture.com",
        position: "Web Director"
      },
      attending: ['123', '456', '789']
    
    };
    component.user = {      
      _id: "1234567890-",
      email: "thomasdriscolltesting@gmail.com",
      firstname: "Thomas",
      github: "thomasdriscolltesting",
      lastname: "Driscoll",
      picture: "https://mypicture.com",
      position: null
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
