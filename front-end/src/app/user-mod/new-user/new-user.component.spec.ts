import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponent } from './new-user.component';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from 'src/app/login-mod/login.service';
import { MembersService } from 'src/app/members-mod/members.service';
import { Router } from '@angular/router';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let loginService: LoginService; let memberService: MembersService; let router : Router;
  let spy: any;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialsModModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ NewUserComponent ],
      providers: [{provide: 'Window', useValue: window}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    loginService = new LoginService(router, memberService);
    component = new NewUserComponent(loginService, memberService, router)
    spy = spyOn(loginService, 'userInfo').and.returnValue(
      {
        nickname: 'thomasdriscoll',
        picture: 'https://mypicture.com'
      });
    spy = spyOn(loginService, "getGlobalUser").and.returnValue({
      _id: "1234567890-",
      email: "thomasdriscoll98@gmail.com",
      firstname: "Thomas",
      github: "thomasdriscoll",
      lastname: "Driscoll",
      picture: "https://mypicture.com",
      position: "Web Director"
    });
  });

    
  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
