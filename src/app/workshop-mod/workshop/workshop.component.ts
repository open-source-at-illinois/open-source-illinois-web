import { Component, OnInit } from '@angular/core';
import { Workshop } from '../workshop-class';
import { User } from '../../user-mod/user-class';
import { WorkshopService } from '../workshop.service';
import { MembersService } from '../../members-mod/members.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  workshops: Workshop[];
  selectedWorkshop: Workshop;

  workshopForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required)
  });

  constructor(
    private workshopService: WorkshopService,
    private memberService: MembersService
    ) { }

  ngOnInit() {
    this.getAllWorkshops();
  }

  getAllWorkshops(): void{
    this.workshopService.getAllWorkshops()
    .subscribe(workshops => this.workshops = workshops)
  }
  onSelect(workshop: Workshop): void{
    this.selectedWorkshop = workshop;
  }

  suggestWorkshop(form: any){
    this.workshopForm = form;
    let newWorkshop: Workshop;
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
          'suggested',
          this.workshopForm.controls['category'].value,      
          user
        );
        console.log(newWorkshop);
        this.workshopService.suggestWorkshop(newWorkshop)
          .subscribe(workshop => console.log(workshop));
        this.workshopForm.reset();
        });
  }
}
