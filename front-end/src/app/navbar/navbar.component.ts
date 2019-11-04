import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-mod/login.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'open-source@illinois';

  constructor(public auth: LoginService) { }

  ngOnInit() {
    this.auth.localAuthSetup();
  }

}
