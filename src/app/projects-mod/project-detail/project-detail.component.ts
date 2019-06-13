import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project-class';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.projectService.getAllProjects()
    .subscribe(
      projects => this.projects = projects
    );
  }

}
