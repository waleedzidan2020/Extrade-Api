import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class faviourtService {
  public FavouriteItemList :any =[]
  public ProductList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.ProductList.asObservable();
  }

  setProduct(Product :any){
    this.FavouriteItemList.push(...Product);
    this.ProductList.next(Product);
  }
  addtofaviourt(Product:any){
    this.FavouriteItemList.push(Product);
    this.ProductList.next(this.FavouriteItemList);
  }
  removeCartItem(Product:any){
    this.FavouriteItemList.map((a:any,index:any)=>{
      if(Product.id===a.id){
        this.FavouriteItemList.splice(index,1);
      }
    })
    this.ProductList.next(this.FavouriteItemList);
  }
  removeAllCart(){
    this.FavouriteItemList=[]
    this.ProductList.next(this.FavouriteItemList);
  }
}
