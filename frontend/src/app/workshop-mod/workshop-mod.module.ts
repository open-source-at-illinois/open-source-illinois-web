import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';
import { AngularMaterialsModModule } from '../angular-materials-mod/angular-materials-mod.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WorkshopComponent,
    WorkshopDetailComponent],
  imports: [
    CommonModule,
    AngularMaterialsModModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class WorkshopModModule { }
