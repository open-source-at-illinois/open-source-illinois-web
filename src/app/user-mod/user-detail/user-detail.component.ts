import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-class';
import { Project } from '../../projects-mod/project-class';
import { Workshop } from '../../workshop-mod/workshop-class';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  approveProject(project: Project){
    project.status = 'active';
    this.userService.statusProject(project)
      .subscribe(project => console.log(project));
    this.projects = this.projects.filter(allproject => allproject != project);
  }

  rejectProject(project: Project){
    project.status = 'rejected';
    this.userService.statusProject(project)
      .subscribe(project => console.log(project));
    this.projects = this.projects.filter(allproject => allproject != project);
  }

  approveWorkshop(workshop: Workshop) {
    workshop.status = 'active';
    this.userService.statusWorkshop(workshop)
      .subscribe(workshop => console.log(workshop));
    this.workshops = this.workshops.filter(allworkshop => allworkshop != workshop);
  }

  rejectWorkshop(workshop: Workshop) {
    workshop.status = 'rejected';
    this.userService.statusWorkshop(workshop)
      .subscribe(workshop => console.log(workshop));
    this.workshops = this.workshops.filter(allworkshop => allworkshop != workshop);
  }
  createWorkshop(form: any){
    this.workshopForm = form;

    var newWorkshop = new Workshop(
      this.workshopForm.controls['title'].value,
      this.workshopForm.controls['description'].value,
      this.workshopForm.controls['date'].value,
      this.workshopForm.controls['location'].value,
      'active',
      this.workshopForm.controls['category'].value,      
      this.user
    );
    console.log(newWorkshop);
    this.userService.createWorkshop(newWorkshop)
      .subscribe(workshop => console.log(workshop));
    this.workshopForm.reset();
  }
}
