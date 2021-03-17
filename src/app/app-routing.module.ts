import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main-page/home-page/home-page.component';
import { AddUserComponent } from './sidenav-links/users/add-user/add-user.component';
import { EdiUserComponent } from './sidenav-links/users/edi-user/edi-user.component';
import { UsersListComponent } from './sidenav-links/users/users-list/users-list.component';
import { UsersComponent } from './sidenav-links/users/users.component';

const routes: Routes = [
  {path:'',component:HomePageComponent,},
  {path:'users',component:UsersComponent,
    children:[
      {path:'',component:UsersListComponent},
      {path:'add-user',component:AddUserComponent},
      {path:'edit-user',component:EdiUserComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
export const routingComponent=[UsersComponent,AddUserComponent,EdiUserComponent]
