import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project-class';
import { ProjectService } from '../project.service';
import { User } from 'src/app/user-mod/user-class';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  @Input() user: User;

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  addAttendee(){
    this.project.members.push(this.user._id);
    this.projectService.addProjectMember(this.user._id, this.project._id)
      .subscribe(workshop => console.log('reached bitch'));
  }
}
