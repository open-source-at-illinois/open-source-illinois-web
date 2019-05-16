import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { MAIN_TOPICS } from '../main_topics';
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

}
