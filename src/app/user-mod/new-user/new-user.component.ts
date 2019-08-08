import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login-mod/login.service';
import { MembersService } from 'src/app/members-mod/members.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Member } from '../../members-mod/member-class';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  githubInfo : any;

  newUserForm = new FormGroup({
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
  });
  constructor(
    private loginService: LoginService,
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.githubInfo = this.loginService.userInfo();
  }

  addNewUser(form: any){
    this.newUserForm = form;
    console.log(this.githubInfo);
    let newMember = new Member(
      this.newUserForm.controls['email'].value,
      this.newUserForm.controls['firstname'].value,
      this.githubInfo.nickname,
      this.newUserForm.controls['lastname'].value,
      this.githubInfo.picture
    );
    this.membersService.addMember(newMember)
      .subscribe(member => console.log(member));
    this.newUserForm.reset();
  }
}
