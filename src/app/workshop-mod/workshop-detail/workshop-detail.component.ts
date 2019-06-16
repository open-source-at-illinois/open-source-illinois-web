import { Component, OnInit, Input } from '@angular/core';
import { Workshop } from '../workshop-class';
import { WorkshopService } from '../workshop.service';

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.scss']
})
export class WorkshopDetailComponent implements OnInit {
  @Input() workshop: Workshop;
  workshops: Workshop[];

  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
    // this.getAllWorkshops();
  }

  // getAllWorkshops(): void {
  //   this.workshopService.getAllWorkshops()
  //   .subscribe(
  //     workshops => this.workshops = workshops
  //   );
  // }

}
