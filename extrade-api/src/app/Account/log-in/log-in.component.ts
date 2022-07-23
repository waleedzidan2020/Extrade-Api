import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResultViewModel, LoginViewModel } from 'src/app/Models/Acount';
import { AccountService } from 'src/app/Services/Account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form : FormGroup = new FormGroup([]);
  obj:LoginResultViewModel=new LoginResultViewModel()
  constructor(private Account:AccountService,private builder:FormBuilder,private router :Router) { }

  ngOnInit(): void {

this.Builder();
  }

  Builder (){
    this.form = this.builder.group({
      Email: ["",[Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
      Password:["",Validators.required],
      RememberMe:[false]

    })
  }

  add(){
    let log = new LoginViewModel();
    log.Email = this.form.value["Email"]
    log.Password = this.form.value["Password"]
    log.RememberMe=this.form.value["RememberMe"]
    
   this.Account.login(log).subscribe(res=>{
      if(res.message!=null){
        console.log(res.id)
        localStorage.setItem('Token',res.token);
        localStorage.setItem('username',log.Email);
        localStorage.setItem('RememberMe',res.rememberMe);
        localStorage.setItem("id",res.id);
     
      
   
    // let obj:{
    //   Token:any,
    //   ReturnUrl :string,
    //   RememberMe:string,
    //   message:String
    

    // } = JSON.parse(localStorage.getItem("Token")!)
    // console.log(obj.Token)
   
    
      
        this.router.navigateByUrl('/CreateCollection')
        // clearTimeout(res.Token)
      }
      else
      alert('Wrong Email or Password !!  ')
      
    })
  
  }
}


