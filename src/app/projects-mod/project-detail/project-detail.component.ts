import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project-class';
import { ProjectService } from '../project.service';
import { MatCardModule } from '@angular/material';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;

  projects: Project[];

  constructor() { }

  ngOnInit() {
  }
}
