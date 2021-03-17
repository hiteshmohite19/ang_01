import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {ApiServiceService} from './api-service.service';
import {NavHeadingComponent} from './main-page/nav-heading/nav-heading.component'
import {SideNavComponent} from './main-page/side-nav/side-nav.component';
import { UsersListComponent } from './sidenav-links/users/users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavHeadingComponent,
    SideNavComponent,
    UsersListComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
