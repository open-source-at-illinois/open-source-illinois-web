import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailComponent } from './member-detail.component';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MemberDetailComponent', () => {
  let component: MemberDetailComponent;
  let fixture: ComponentFixture<MemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialsModModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ MemberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    component.user = {
      _id: "1234567890-",
      email: "thomasdriscoll98@gmail.com",
      firstname: "Thomas",
      github: "thomasdriscoll",
      lastname: "Driscoll",
      picture: "https://mypicture.com",
      position: "Web Director",
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
