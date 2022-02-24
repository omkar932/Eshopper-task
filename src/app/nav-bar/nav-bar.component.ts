import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public link1:boolean = false;
  public link2:boolean = true;
  public link3:boolean = false; //category,brand , product
  public searchTerm:string='';
  constructor( private cart:CartService) { }
  ngOnInit(): void {
    var ans_name = localStorage.getItem("name")
    console.log("name");
    console.log(ans_name);

    var ans_type = localStorage.getItem("usertype")

    if(ans_name===null){
      this.link1=false;
      this.link2=true;
    }
    else{
      this.link1=true;
      this.link2=false;

      // if(ans_type=="1"){
      //   this.link3=false;
      // }
      // else if(ans_type=="2"){
      //   this.link3=true;
      // }
    }

  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cart.search.next(this.searchTerm)
  }
}
