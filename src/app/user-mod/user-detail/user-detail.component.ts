import { Component, OnInit } from '@angular/core';
import { User } from '../user-class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser()
    .subscribe(user => this.user = user);
  }

}
