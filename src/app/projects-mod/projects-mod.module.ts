import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModModule { }
