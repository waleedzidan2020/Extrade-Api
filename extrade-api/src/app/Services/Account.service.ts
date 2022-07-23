import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResultViewModel, LoginViewModel } from '../Models/Acount';

@Injectable()
export class AccountService {

  constructor(private http:HttpClient) { }


  login (LogIn : LoginViewModel){

   return this.http.post<LoginResultViewModel>("https://localhost:63000/User/SignIn",LogIn)

  }

  logout(){
    let token=localStorage.getItem('token')
    return this.http.post<LoginResultViewModel>("https://localhost:63000/User/SignIn",{token:token});
}
IsLoggedIn():boolean{
    let token =localStorage.getItem('token')
    if(token != null){
        return true;
    }
    return false;
}
}
