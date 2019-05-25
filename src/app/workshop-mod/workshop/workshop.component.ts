import { Component, OnInit } from '@angular/core';
import { Workshop } from '../workshop-class';
import { WORKSHOPS } from '../workshops';
import { WorkshopDetailComponent } from '../workshop-detail/workshop-detail.component';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  workshops = WORKSHOPS;
  selectedWorkshop: Workshop;

  constructor() { }

  ngOnInit() {
  }

  onSelect(workshop: Workshop): void{
    this.selectedWorkshop = workshop;
  }
}
