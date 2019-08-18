import { Component, OnInit, Input } from '@angular/core';
import { Workshop } from '../workshop-class';
import { WorkshopService } from '../workshop.service';
import { User } from 'src/app/user-mod/user-class';

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.scss']
})
export class WorkshopDetailComponent implements OnInit {
  @Input() workshop: Workshop;
  @Input() user: User;

  constructor(private workshopService: WorkshopService) { }

  ngOnInit() {
  }

  addAttendee(){
    this.workshop.attending.push(this.user._id);
    this.workshopService.addAttendee(this.user._id, this.workshop._id)
      .subscribe(workshop => console.log('reached bitch'));
  }
  

}
