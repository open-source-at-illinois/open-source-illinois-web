import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-class';
import { Project } from '../../projects-mod/project-class';
import { Workshop } from '../../workshop-mod/workshop-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkshopService } from 'src/app/workshop-mod/workshop.service';
import { ProjectService } from 'src/app/projects-mod/project.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  
  projects: Project[];
  workshops: Workshop[];

  workshopForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required)
  });
  

  constructor(
    private projectService: ProjectService,
    private workshopService: WorkshopService
    ) { }

  ngOnInit() {
    this.getSuggestedProjects(this.user.position);
    this.getSuggestedWorkshops(this.user.position);
  }

  getSuggestedProjects(position : string): void{
    this.projectService.getSuggestedProjects(position)
    .subscribe(projects => this.projects = projects);
  }

  getSuggestedWorkshops(position: string): void{
    this.workshopService.getSuggestedWorkshops(position)
    .subscribe(workshops => this.workshops = workshops);
  }

  approveProject(project: Project){
    project.status = 'active';
    this.projectService.statusProject(project)
      .subscribe(project => console.log(project));
    this.projects = this.projects.filter(allproject => allproject != project);
  }

  rejectProject(project: Project){
    project.status = 'rejected';
    this.projectService.statusProject(project)
      .subscribe(project => console.log(project));
    this.projects = this.projects.filter(allproject => allproject != project);
  }

  approveWorkshop(workshop: Workshop) {
    workshop.status = 'active';
    this.workshopService.statusWorkshop(workshop)
      .subscribe(workshop => console.log(workshop));
    this.workshops = this.workshops.filter(allworkshop => allworkshop != workshop);
  }

  rejectWorkshop(workshop: Workshop) {
    workshop.status = 'rejected';
    this.workshopService.statusWorkshop(workshop)
      .subscribe(workshop => console.log(workshop));
    this.workshops = this.workshops.filter(allworkshop => allworkshop != workshop);
  }
}
