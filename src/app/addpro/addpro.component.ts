import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css']
})
export class AddproComponent implements OnInit {
  public category:any=['Small','Large','Extra-Large'];
  public brand:any=['Nike','Adidas','Armani',"Zara"];
  public addpro:any=[];
  public name:any; price:any; discount:any;
  public product:any=[];
  constructor(private curd:CrudService, private http:HttpClient, private fb:FormBuilder) { 
    this.addpro= this.fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      discount:['',Validators.required],
      category:[''],
      brand:['']
    })
   }
  addProduct(){
    this.curd.postProductData('products',this.addpro.value).subscribe((res:any)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }
  ngOnInit(): void {

  }

}
