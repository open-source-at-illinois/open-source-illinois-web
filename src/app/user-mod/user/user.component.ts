import { Component, OnInit } from '@angular/core';
import { User } from '../user-class';
import { UserService } from '../user.service';
import { LoginService } from 'src/app/login-mod/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private auth: LoginService,
    private userService: UserService) { 
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser()
    .subscribe(user => this.user = user[0]);
  }

  // getUserMember(): void{
  //   this.userService.getUserMember()
  //   .subscribe(user => this.user = user[0]);
  // }
}
