import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  
  constructor(private _apiService: ApiServiceService,private _router:Router,private _activatedRoute: ActivatedRoute) {}

  usersList: any = [];

  ngOnInit(): void {
    this._apiService.allUsers().subscribe(
      (data) => (this.usersList = data),
      (error) => console.log(error)
    );
  }

  addUser(){
    this._router.navigate(['add-user'],{relativeTo:this._activatedRoute})
  }

  edit(id:any){
    alert(id)
  }

  delete(id:any){
    alert(id)
  }

}
