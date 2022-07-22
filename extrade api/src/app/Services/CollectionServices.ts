import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CollectionEditViewModel } from "../Models/CollectionViewModel";




@Injectable()


export class CollectionServices{
    constructor (private http:HttpClient){}
      
    addCollection(RegisterView: CollectionEditViewModel){
      
        return this.http.post<CollectionEditViewModel>("https://localhost:63000/Collection/Add",RegisterView);
    }

}