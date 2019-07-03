import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './projects-mod/project/project.component';
import { TopicsComponent } from './topics/topics.component';
import { WorkshopComponent } from './workshop-mod/workshop/workshop.component';
import { MembersComponent } from './members-mod/members/members.component';
import { UserComponent } from './user-mod/user/user.component';

const routes: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'workshops', component: WorkshopComponent },
  {path: 'projects', component: ProjectComponent},
  {path: 'user', component: UserComponent},
  {path: '', component: TopicsComponent}
  //Need to make a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
