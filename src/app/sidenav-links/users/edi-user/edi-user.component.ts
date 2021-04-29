import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-edi-user',
  templateUrl: './edi-user.component.html',
  styleUrls: ['./edi-user.component.css']
})
export class EdiUserComponent implements OnInit {

  userDetails!:FormGroup
  user:any=[]
  userId!:any;
  constructor(private _formBuilder:FormBuilder,private _apiService: ApiServiceService,private _router:Router,private _activatedRoute: ActivatedRoute) { }

   get userGroup() {
    return this.userDetails.controls;
  }

  ngOnInit(): void {
    
    this.userId=this._activatedRoute.snapshot.paramMap.get('user')
    console.log('abcd'+ this.userId);
    
    this._apiService.viewUser(this.userId).subscribe(
      data=>{this.user=data
      console.log(this.user)},
      error=>console.log(error)
    )

    // this.userDetails.setValue({
    //   name:[this.user.name],
    //   email:this.user.email,
    //   mobileno:this.user.mobile,
    //   age:this.user.age,
    //   dob:this.user.dob,
    //   address:this.user.address,
    //   profession:this.user.profession,
    //   current_organisation:this.user.current_organisation,
    //   jd:this.user.jd,
    //   previous_organisation:this.user.previous_organisation,
    // })

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


    this.userDetails.setValue(this.user.value)
    console.log(this.userDetails);
  

  }

  users(){
    this._router.navigate(['../../'],{relativeTo:this._activatedRoute})
  }

  submit(){

  }
}
