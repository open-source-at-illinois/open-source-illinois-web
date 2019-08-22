import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

import { UserComponent } from './user.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MemberDetailComponent } from '../member-detail/member-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        AngularMaterialsModModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        UserComponent,
        UserDetailComponent,
        MemberDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = {
      _id: "1234567890-",
      email: "thomasdriscoll98@gmail.com",
      firstname: "Thomas",
      github: "thomasdriscoll",
      lastname: "Driscoll",
      picture: "https://mypicture.com",
      position: "Web Director"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
