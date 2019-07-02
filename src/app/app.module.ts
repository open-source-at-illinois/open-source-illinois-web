import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopicsComponent } from './topics/topics.component';
import { WorkshopComponent } from './workshop-mod/workshop/workshop.component';
import { UserComponent } from './user-mod/user/user.component';
import { UserDetailComponent } from './user-mod/user-detail/user-detail.component';
import { LoginComponent } from './login-mod/login/login.component';

import { ProjectsModModule } from './projects-mod/projects-mod.module';
import { WorkshopModModule } from './workshop-mod/workshop-mod.module';
import { MembersModModule } from './members-mod/members-mod.module';
import { UserModModule} from './user-mod/user.module';
import { AngularMaterialsModModule } from './angular-materials-mod/angular-materials-mod.module';
const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicsComponent,
    UserComponent,
    UserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProjectsModModule,
    WorkshopModModule,
    MembersModModule,
    HttpClientModule,
    AngularMaterialsModModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
