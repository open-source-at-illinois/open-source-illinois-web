import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './projects-mod/project/project.component';
import { WorkshopComponent } from './workshop-mod/workshop/workshop.component';
import { MembersComponent } from './members-mod/members/members.component';
import { UserComponent } from './user-mod/user/user.component';
import { LoginComponent } from './login-mod/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { NewUserComponent } from './user-mod/new-user/new-user.component';

const routes: Routes = [
  {path: 'members', component: MembersComponent},
  {path: 'workshops', component: WorkshopComponent },
  {path: 'projects', component: ProjectComponent},
  {path: 'user', component: UserComponent, canActivate:[AuthGuard]},
  {path: 'callback', component: LoginComponent},
  {path: 'signup', component: NewUserComponent},
  {path: '', component: HomeComponent}
  //Need to make a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
