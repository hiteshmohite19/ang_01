import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { User } from '../../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private _apiService: ApiServiceService) {}

  usersList: any = [];

  ngOnInit(): void {
    this._apiService.allUsers().subscribe(
      (data) => (this.usersList = data),
      (error) => console.log(error)
    );
  }

  edit(id:any){
    alert(id)
  }

  delete(id:any){
    alert(id)
  }
}
