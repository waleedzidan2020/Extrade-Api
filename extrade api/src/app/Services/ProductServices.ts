import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"
import { ProductViewModel } from "../Models/ProductViewModel"



@Injectable()
export class ProductServices{
    constructor(private http:HttpClient){}
    url:string=environment.apiUrl
    addProduct(Product:ProductViewModel){
        return this.http.post<ProductViewModel>(this.url+ "Student/post",Product)
    }
    getStudent(){
        return this.http.get<ProductViewModel>( environment.apiUrl+"Student/get")
    }
    getStudentById(ID:number){
        return this.http.get<ProductViewModel>( environment.apiUrl+"Student/getbyid?id="+ID)
    }
    
    deleteStudent(ID:number){
        return this.http.delete<ProductViewModel>(this.url+ "Student/delete?id="+ID)
    }
    updateStudent(Product:ProductViewModel){
        return this.http.put<ProductViewModel>(this.url+"Student/put",Product)
    }
}