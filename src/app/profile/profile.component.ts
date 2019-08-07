import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-mod/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: LoginService) { }

  ngOnInit() {
  }

}
