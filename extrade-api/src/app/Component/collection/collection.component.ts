import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CollectionEditViewModel } from 'src/app/Models/CollectionViewModel';
import { CollectionServices } from 'src/app/Services/CollectionServices';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  url:string = ""
  CollectionForm:FormGroup=new FormGroup([]);
  constructor(private formBuilder:FormBuilder ,private CollectionServices :CollectionServices) { }

  ngOnInit(): void {
 
     this.CollectionForm = this.formBuilder.group({
      NameEN:[""],
      NameAr:[""],

     })
  }
  add(){
    let Collection:CollectionEditViewModel=new CollectionEditViewModel();
<<<<<<< HEAD:extrade-api/src/app/Component/collection/collection.component.ts
    Collection.NameEN=this.CollectionForm.value["NameEN"];
    Collection.NameAr=this.CollectionForm.value["NameAr"];
=======
    Collection.nameEn=this.CollectionForm.value["nameEn"];
    Collection.nameAr=this.CollectionForm.value["nameAr"];
    //Collection.marketerID=this.CollectionForm.value["nameAr"];
>>>>>>> e8b05d0d51893d58624d96f21e185b251955aed1:extrade api/src/app/Component/collection/collection.component.ts
    
    this.CollectionServices.addCollection(Collection).subscribe(

      res=>{
        
        console.log(res)
        
        this.url= res.url
        if(res.massege=="Done Added"){


          alert("data Added");
        }
      }
    );
  }
}

