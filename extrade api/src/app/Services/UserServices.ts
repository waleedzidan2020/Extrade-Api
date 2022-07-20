import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegisterView } from "../Models/Acount";




// const httpOptions = 
//     new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()


export class UserServices{
    constructor (private http:HttpClient){}
      
    addUser(RegisterView: RegisterView){
     
        return this.http.post<RegisterView>("https://localhost:63000/User/Create",RegisterView);

    }
    
   


}