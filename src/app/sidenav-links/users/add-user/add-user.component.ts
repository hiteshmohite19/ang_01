import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userDetails!:FormGroup
  
  constructor(private _formBuilder:FormBuilder,private _apiService: ApiServiceService,private _router:Router,private _activatedRoute:ActivatedRoute) { }

  get userGroup() {
    return this.userDetails.controls;
  }

  ngOnInit(): void {

    this.userDetails=this._formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      age:['',Validators.minLength(2)],
      dob:[''],
      address:[''],
      profession:['',[Validators.required]],
      current_organisation:[''],
      jd:[''],
      previous_organisation:['']
    })

  }

  users(){
    this._router.navigate(['../'],{relativeTo:this._activatedRoute})
  }

  submit(){
    this._apiService.addUser(this.userDetails.value)
      .subscribe(
        data=>this.userDetails.reset,
        error=>console.log(error)
      )
  }
}
