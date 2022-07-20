import { HttpClient } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterView } from '../Models/Acount';
import { UserServices } from '../Services/UserServices';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  Form:FormGroup=new FormGroup([]);
  constructor( private formBuilder:FormBuilder ,private userServices :UserServices,private Http:HttpClient ) { 
    
  }
  ngOnInit(): void {
   this.build();
  }




  build(user?:RegisterView){

    this.Form=this.formBuilder.group(
      {
        nameEn:[user?.nameEn,[Validators.required,Validators.minLength(3)]],
        nameAr:[user?.nameAr,[Validators.required,Validators.minLength(3)]],
        email:[user?.email,[Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
        password:[user?.password,Validators.required],
        country:[user?.country,[Validators.required,Validators.minLength(4)]],
        city:[user?.city,[Validators.required,Validators.minLength(4)]],
        street:[user?.street,[Validators.required,Validators.minLength(4)]],
        phones:[user?.Phones,[Validators.required]],
        uploadedimg:[user?.uploadedimg]
    });

   
  }
    
    add(){
      let user:RegisterView=new RegisterView();

      user.nameEn=this.Form.value["nameEn"];
      user.nameAr=this.Form.value["nameAr"];
      user.email=this.Form.value["email"];
      user.password=this.Form.value["password"];
      user.country=this.Form.value["country"];
      user.city=this.Form.value["city"];
      user.street=this.Form.value["street"];
      user.Phones.push(this.Form.value["phones"]);
      // user.uploadedimg=this.Form.value["uploadedimg"];
      
      this.userServices.addUser(user).subscribe(
        res=>console.log(res.uploadedimg)
      );
  }
}


