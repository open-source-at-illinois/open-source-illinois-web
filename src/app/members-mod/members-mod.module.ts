import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members/members.component';
import { MatCardModule } from '@angular/material';
@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ]
})
export class MembersModModule { }
