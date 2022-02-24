import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getData(keyname:any){
    var finalPath = environment.apiPath + keyname;

    return this.http.get(finalPath);
  }
  postData(keyname:any, userdata:any){
    var finalPath = environment.apiPath + keyname;
    console.log(finalPath);
    
    return this.http.post(finalPath,userdata);
  }
  postProductData(keyname:any, product:any){
    var finalPath = environment.apiPath + keyname;
    console.log(finalPath);
    
    return this.http.post(finalPath,product);
  }
  deleteData(){
    
  }


}
