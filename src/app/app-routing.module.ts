import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './projects-mod/project/project.component';
import { TopicsComponent } from './topics/topics.component';
import { WorkshopComponent } from './workshop-mod/workshop/workshop.component';

const routes: Routes = [
  {path: 'workshops', component: WorkshopComponent },
  {path: 'projects', component: ProjectComponent},
  {path: '', component: TopicsComponent}
  //Need to make a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
