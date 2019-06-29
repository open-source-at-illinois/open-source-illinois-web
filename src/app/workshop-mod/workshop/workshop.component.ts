import { Component, OnInit } from '@angular/core';
import { Workshop } from '../workshop-class';
import { WorkshopDetailComponent } from '../workshop-detail/workshop-detail.component';
import { WorkshopService } from '../workshop.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  workshops: Workshop[];
  selectedWorkshop: Workshop;

  constructor(private workshopService: WorkshopService) { }

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
}
