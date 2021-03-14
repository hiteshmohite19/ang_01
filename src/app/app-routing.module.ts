import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './main-page/home-page/home-page.component';
import { UsersComponent } from './sidenav-links/users/users.component';

const routes: Routes = [
  {path:'',component:HomePageComponent,},
  {path:'users',component:UsersComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
export const routingComponent=[UsersComponent]
