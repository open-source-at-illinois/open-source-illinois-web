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

import { ProjectsModModule } from './projects-mod/projects-mod.module';
import { WorkshopModModule } from './workshop-mod/workshop-mod.module';
import { MembersModModule } from './members-mod/members-mod.module';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProjectsModModule,
    WorkshopModModule,
    MembersModModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
