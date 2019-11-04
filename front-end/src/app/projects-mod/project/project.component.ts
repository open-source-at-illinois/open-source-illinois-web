import { Component, OnInit } from '@angular/core';
import { Project} from '../project-class';
// import { PROJECTS } from '../projects';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { ProjectService } from '../project.service';
import { User } from 'src/app/user-mod/user-class';
import { LoginService } from 'src/app/login-mod/login.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // Potentially turn projects into a service
  user: User;
  projects: Project[]
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getAllProjects();
    this.user = this.loginService.getGlobalUser();
  }

  getAllProjects(): void {
    this.projectService.getAllProjects()
    .subscribe(projects => this.projects = projects);
  }

  onSelect(project: Project): void{
    this.selectedProject = project;
  }
}
