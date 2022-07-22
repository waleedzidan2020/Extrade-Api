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

  CollectionForm:FormGroup=new FormGroup([]);
  constructor(private formBuilder:FormBuilder ,private CollectionServices :CollectionServices) { }

  ngOnInit(): void {
     this.CollectionForm = this.formBuilder.group({
      nameEn:[""],
      nameAr:[""],

     })
  }
  add(){
    let Collection:CollectionEditViewModel=new CollectionEditViewModel();
    Collection.nameEn=this.CollectionForm.value["nameEn"];
    Collection.nameAr=this.CollectionForm.value["nameAr"];
    
    this.CollectionServices.addCollection(Collection).subscribe();
  }
}

