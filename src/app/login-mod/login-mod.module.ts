import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MembersService } from '../members-mod/members.service';

@NgModule({
  // declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  providers: [MembersService]
})
export class LoginModModule { }
