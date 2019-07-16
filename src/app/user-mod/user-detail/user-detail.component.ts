import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-class';
import { Project } from '../../projects-mod/project-class';
import { Workshop } from '../../workshop-mod/workshop-class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  
  projects: Project[];
  workshops: Workshop[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getSuggestedProjects(this.user.position);
    this.getSuggestedWorkshops(this.user.position);
  }

  getSuggestedProjects(position : string): void{
    this.userService.getSuggestedProjects(position)
    .subscribe(projects => this.projects = projects);
  }

  getSuggestedWorkshops(position: string): void{
    this.userService.getSuggestedWorkshops(position)
    .subscribe(workshops => this.workshops = workshops);
  }
  //not working
  approveProject(project: Project){
    project.status = 'approved';
    this.userService.approveProject(project);
  }
}
