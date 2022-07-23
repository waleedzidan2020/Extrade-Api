import { Component, OnInit } from '@angular/core';
import { CollectionEditViewModel, CollectionViewModel } from 'src/app/Models/CollectionViewModel';
import { CollectionServices } from 'src/app/Services/CollectionServices';
@Component({
  selector: 'app-get-collections',
  templateUrl: './get-collections.component.html',
  styleUrls: ['./get-collections.component.css']
})
export class GetCollectionsComponent implements OnInit {
  
  public Collection:CollectionViewModel =new CollectionViewModel()
  constructor(private CollectionServices :CollectionServices) { }

  ngOnInit(): void {
    
  }
  get(){
    
      this.CollectionServices.getCollection().subscribe(result=>
      {

       this. Collection=result.Data
      });
    
    return this.Collection;
  }
  getProductInCollection(Code:string){
    //let colProduct:CollectionProductEditViewModel=new CollectionProductEditViewModel();
    this.CollectionServices.getProductsInCollection(Code).subscribe();
  }

}
