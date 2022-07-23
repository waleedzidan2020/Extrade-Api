import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  //result:ResultView[]= []
    
  constructor(private Http:HttpClient) { }

  ngOnInit(): void {
    this.Http.get<ResultView>("https://localhost:63000/AllUsers").subscribe(
      p=>{var l=p.data;
        for(let i in l){
          console.log(l[i].nameEn)
        }
      }
      
      
    );
    
  }

}

//  export class RegisterView{
//    NameEn:string="";
//    NameAr:string="";
//    Email:string="";
//    Password:string="";
//   Country:string="";
//   City:string="";
//    Street:string="";
//    Phones:string="";
//    uploadedimg:string="";
//  }
export class ResultView{
  success:boolean = false;
  massege:string ="";
  url :string ="";
  data:any;

}
