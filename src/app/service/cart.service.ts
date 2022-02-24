import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any = [];
  public productList = new BehaviorSubject<any>({});
  public search= new BehaviorSubject<string>("")
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product:any){
    this.cartItemList.push(...product); // getter
    this.productList.next(product); /// setter
  }
  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
  }
  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
  }
  postData(keyName:any , userdata:any){
    var finalPath = environment.apiPath + keyName;
    return this.http.post(finalPath,userdata)
    
  }
}
