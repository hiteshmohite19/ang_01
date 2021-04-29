import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './classes/User';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient:HttpClient) { }

  private _base_url='http://127.0.0.1:8000/api/'
  headers=new HttpHeaders(
    {'Content-type':'application/json'},
  )

  allUsers(){ 
    return this._httpClient.get(this._base_url+'users',
    {headers:this.headers})
  }

  addUser(user:any){ 
    return this._httpClient.post(this._base_url+'addUser',user,
    {headers:this.headers})
  }

  updateUser(id:number){
    return this._httpClient.get(this._base_url+"updateUser/"+id)
  }

  viewUser(id:number){
    return this._httpClient.get(this._base_url+"viewUser/"+id)
  }
}
