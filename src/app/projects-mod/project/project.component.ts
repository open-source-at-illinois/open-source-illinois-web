import { Component, OnInit } from '@angular/core';
import { Project} from '../project-class';
import { PROJECTS } from '../projects';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // Potentially turn projects into a service
  projects = PROJECTS;
  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project): void{
    this.selectedProject = project;
  }

}
