import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {ApiServiceService} from './api-service.service';
import {NavHeadingComponent} from './main-page/nav-heading/nav-heading.component'
import {SideNavComponent} from './main-page/side-nav/side-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavHeadingComponent,
    SideNavComponent, 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
