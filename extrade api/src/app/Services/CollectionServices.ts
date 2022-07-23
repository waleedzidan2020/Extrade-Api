import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CollectionEditViewModel, CollectionViewModel } from "../Models/CollectionViewModel";




@Injectable()


export class CollectionServices{
    constructor (private http:HttpClient){}
      
    addCollection(RegisterView: CollectionEditViewModel){
        return this.http.post<CollectionEditViewModel>("https://localhost:63000/Collection/Add",RegisterView);
    }
    getCollection(){
        return this.http.get<CollectionViewModel>("https://localhost:63000/Api/GetCollection");
    }
    getProductsInCollection(Code : string){
        return this.http.post<CollectionViewModel>("https://localhost:63000/Api/GetCollection",Code);
    }

}