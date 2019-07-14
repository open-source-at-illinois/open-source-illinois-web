import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-class';
import { Project } from '../../projects-mod/project-class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  
  projects: Project[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getPendingProjects(this.user.position);
  }

  getPendingProjects(position : string): void{
    this.userService.getPendingProjects(position)
    .subscribe(projects => this.projects = projects);
  }

  //not working
  approveProject(project: Project){
    project.status = 'approved';
    this.userService.approveProject(project);
  }
}
