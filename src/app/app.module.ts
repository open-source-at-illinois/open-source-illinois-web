import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login-mod/login/login.component';
import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';

import { ProjectsModModule } from './projects-mod/projects-mod.module';
import { WorkshopModModule } from './workshop-mod/workshop-mod.module';
import { MembersModModule } from './members-mod/members-mod.module';
import { UserModModule} from './user-mod/user.module';
import { AngularMaterialsModModule } from './angular-materials-mod/angular-materials-mod.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    ProjectsModModule,
    WorkshopModModule,
    MembersModModule,
    HttpClientModule,
    AngularMaterialsModModule,
    NguCarouselModule,
    NgbModule,
    UserModModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
