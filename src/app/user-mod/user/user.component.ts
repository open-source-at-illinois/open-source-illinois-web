import { Component, OnInit } from '@angular/core';
import { User } from '../user-class';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser()
    .subscribe(user => this.user = user[0]);
  }

}
