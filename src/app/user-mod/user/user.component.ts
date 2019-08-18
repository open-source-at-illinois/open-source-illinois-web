import { Component, OnInit } from '@angular/core';
import { User } from '../user-class';
import { UserService } from '../user.service';
import { LoginService } from 'src/app/login-mod/login.service';
import { MembersService } from 'src/app/members-mod/members.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  githubInfo: any;

  constructor(private auth: LoginService) { 
  }

  ngOnInit() {
    this.user = this.auth.getGlobalUser();
  }
}
