import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkshopService } from 'src/app/workshop-mod/workshop.service';
import { Workshop } from 'src/app/workshop-mod/workshop-class';
import { User } from '../user-class';
import { MembersService } from 'src/app/members-mod/members.service';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/projects-mod/project.service';
import { Project } from 'src/app/projects-mod/project-class';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  @Input() user: User;

  workshops : Workshop[];
  projects: Project[];
  allPendingMembers: User[];
  currPendingMembers: any;

  workshopForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    firstname: new FormControl(null),
    lastname: new FormControl(null)
  });

  constructor(
    private workshopService: WorkshopService,
    private projectService: ProjectService,
    private memberService: MembersService
  ) { }

  ngOnInit() {
    this.getWorkshopByUser();
    this.getProjectByUser();
  }

  getWorkshopByUser(){
    this.workshopService.getWorkshopByUser(this.user._id)
      .subscribe(userWorkshops => {
        this.workshops = userWorkshops;
      });
  }

  getProjectByUser(){
    this.projectService.getProjectByUser(this.user._id)
      .subscribe( (userProjects) => {
        this.projects = userProjects;
        this.currPendingMembers = this.projects[0].pendingMembers;
        if(this.projects === []){
          return;
        };
        for(var i=1; i < this.projects.length; i++){
          for(var j=0; j < this.projects[i].pendingMembers.length; j++){
            if(!this.currPendingMembers.includes(this.projects[i].pendingMembers[j])){
              this.currPendingMembers.push(this.projects[i].pendingMembers[j]);
            }
          }
        }
        console.log(typeof(this.currPendingMembers));
        this.memberService.getPendingMembers(this.currPendingMembers)
          .subscribe(pending => {
            this.allPendingMembers = pending;
          });
      })
  }

  approvePendingMember(id: string){
    this.projectService.approveProjectMember(id)
      .subscribe(member => console.log(member));
    this.allPendingMembers = this.allPendingMembers.filter(allproject => allproject._id != id);
  }

  rejectPendingMember(id: string){
    this.projectService.rejectProjectMember(id)
      .subscribe(member => console.log(member));
    this.allPendingMembers = this.allPendingMembers.filter(allproject => allproject._id != id);
  }

  suggestWorkshop(form: any){
    this.workshopForm = form;
    let newWorkshop: Workshop;
    var status = 'suggested';
    if(this.user.position){
      this.workshopForm.controls['firstname'].setValue(this.user.firstname);
      this.workshopForm.controls['lastname'].setValue(this.user.lastname);
      status = 'active';
    }
    let user = new User(
      null,
      this.workshopForm.controls['firstname'].value,
      null,
      this.workshopForm.controls['lastname'].value,
      null,
      null
    )
    this.memberService.getMember(user)
      .subscribe(member => {
        user = member[0];
        newWorkshop = new Workshop(
          this.workshopForm.controls['title'].value,
          this.workshopForm.controls['description'].value,
          this.workshopForm.controls['date'].value,
          this.workshopForm.controls['location'].value,
          status,
          this.workshopForm.controls['category'].value,      
          user
        );
        console.log(newWorkshop);
        this.workshopService.createWorkshop(newWorkshop)
          .subscribe(workshop => console.log(workshop));
        this.workshopForm.reset();
        if(this.user.position){
          this.workshopService.getSuggestedWorkshops(this.user.position);
        }
        });
  }
}
