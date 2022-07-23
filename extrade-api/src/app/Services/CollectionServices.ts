import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CollectionEditViewModel, CollectionViewModel } from "../Models/CollectionViewModel";
import { ResultView } from "../result/result.component";
import { AuthService } from "./Auth.service";




@Injectable()


export class CollectionServices{
    constructor (private http:HttpClient,private Auth:AuthService){}
    
    
    addCollection(RegisterView: CollectionEditViewModel){
        console.log(this.Auth.getHeaderForHTTP());
        return this.http.post<ResultView>(`https://localhost:63000/Api/AddCollection`,RegisterView,this.Auth.getHeaderForHTTP());
    }

}