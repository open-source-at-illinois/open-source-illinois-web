import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';

@NgModule({
  declarations: [
    WorkshopComponent,
    WorkshopDetailComponent],
  imports: [
    CommonModule
  ]
})
export class WorkshopModModule { }
