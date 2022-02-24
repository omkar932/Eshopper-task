import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CrudService } from '../crud.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchKey:string="";
  public productList:any;
  public filterCategory:any;
  constructor(private api:ApiService, private cart:CartService, private crud:CrudService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe((res)=>{
      this.productList =res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing" ){
          a.category = 'fashion'
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    this.cart.search.subscribe((res)=>{
      this.searchKey = res;
    })
  }
  addToCart(item:any){
    this.cart.addToCart(item) 
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  addpro(){
    // this.crud.postProductData()
  }
}
