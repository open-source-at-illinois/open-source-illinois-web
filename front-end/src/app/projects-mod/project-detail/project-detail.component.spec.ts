import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProjectDetailComponent } from './project-detail.component';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialsModModule, HttpClientTestingModule],
      declarations: [ ProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    component.project = {
      _id: '1234567890',
      title: 'Mock Project',
      description: 'A project that does not exist',
      location: 'Siebel 1790',
      meetup: 'Fridays at 7 PM',
      status: 'active',
      github: 'fakegithub',
      category: 'web development',
      picture: 'https://mypicture.com',
      // Member info
      leader: 'Thomas Driscoll',
      leaderId: 'thomas123',
      members: ['234', '345', '456'],
      pendingMembers: ['123', '789']
    };
    component.user = {
      _id: "1234567890-",
      email: "thomasdriscoll98@gmail.com",
      firstname: "Thomas",
      github: "thomasdriscoll",
      lastname: "Driscoll",
      picture: "https://mypicture.com",
      position: "Web Director",
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
