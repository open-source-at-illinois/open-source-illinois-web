import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-mod/login.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slide_in_out', [
      state('slide_in', style({
        width: '100vw',
        color:'white'
        // css styles when the element is in slide_in
      })),
      state('slide_out', style({
        width: '0vw',
        color:'rgba(0,0,0,0)'
        // css styles when the element is in slide_out
      })),
      // animation effect when transitioning from one state to another
      transition('slide_in <=> slide_out', animate(300))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  title = 'open-source@illinois';

  constructor(public auth: LoginService) { }

  ngOnInit() {
    this.auth.localAuthSetup();
  }

  slider_state: string = "slide_out";
  toggleSlider(): void {
    // do something to change the animation_state variable
    this.slider_state = this.slider_state === 'slide_out' ? 'slide_in' : 'slide_out';
    console.log(this.slider_state)
  }

}
