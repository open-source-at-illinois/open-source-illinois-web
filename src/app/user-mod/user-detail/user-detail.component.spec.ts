import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from '../user/user.component';
import { UserDetailComponent } from './user-detail.component';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MemberDetailComponent } from '../member-detail/member-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialsModModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        UserDetailComponent,
        UserComponent,
        MemberDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
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
