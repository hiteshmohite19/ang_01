import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './classes/User';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient:HttpClient) { }

  base_url='http://127.0.0.1:8000/api/'
  headers=new HttpHeaders(
    {'Content-type':'application/json'},
  )

  allUsers(){ 
    return this._httpClient.get(this.base_url+'users',
    {headers:this.headers})
  }
}
