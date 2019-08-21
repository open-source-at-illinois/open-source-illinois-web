import { Component, OnInit } from '@angular/core';
import { User } from '../user-class';
import { LoginService } from 'src/app/login-mod/login.service';

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
