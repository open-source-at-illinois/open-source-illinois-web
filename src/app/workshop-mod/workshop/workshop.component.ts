import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Workshop } from '../workshop-class';
import { User } from '../../user-mod/user-class';
import { WorkshopService } from '../workshop.service';
import { MembersService } from '../../members-mod/members.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login-mod/login.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss'],
})

export class WorkshopComponent implements OnInit {

  workshops: Workshop[];
  selectedWorkshop: Workshop;
  user: User;

  constructor(
    private workshopService: WorkshopService,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.user = this.loginService.getGlobalUser();
    this.getAllWorkshops();
  }

  getAllWorkshops(): void{
    this.workshopService.getAllWorkshops()
    .subscribe(workshops => this.workshops = workshops)
  }
  onSelect(workshop: Workshop): void{
    this.selectedWorkshop = workshop;
  }

  
}
