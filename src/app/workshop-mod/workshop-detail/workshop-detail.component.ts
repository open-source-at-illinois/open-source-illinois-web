import { Component, OnInit, Input } from '@angular/core';
import { Workshop } from '../workshop-class';

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.scss']
})
export class WorkshopDetailComponent implements OnInit {
  @Input() workshop: Workshop;

  constructor() { }

  ngOnInit() {
  }

}
