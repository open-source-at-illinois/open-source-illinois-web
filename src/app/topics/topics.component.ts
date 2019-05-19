import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { MAIN_TOPICS } from '../main_topics';
import { Observable, of } from 'rxjs';

/* Tommy D - Figure out how to use RxJS and *ngFor to make
each topic route to desired locations
*/
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  main_topics = MAIN_TOPICS;

  constructor() { }

  ngOnInit() {
  }

  // onSelect(topic: Topic): void{
  //
  // }
}
