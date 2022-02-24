import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:any;
  public errmsg:String = "";
  public errmsgLogin:String = "";
  constructor(private fb:FormBuilder, private crud:CrudService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]]
    });
  }
  loginFormSubmit(){
    console.log(this.loginForm.value);
    var textEmail = this.loginForm.value.email;
    var textPass = this.loginForm.value.password;

    var path = `users?email=${textEmail}&password=${textPass}`
    console.log(path);
    
    this.crud
    .getData(path)
    .subscribe((res:any)=>{
      console.log(res);

      if(res['length'] > 0){
        this.errmsgLogin = "Auth Success";
        console.log(this.router);
        localStorage.setItem('id' , res[0].id)
        localStorage.setItem('email' , res[0].email)
        localStorage.setItem('mobile' , res[0].mobile)
        localStorage.setItem('name' , res[0].name)
        localStorage.setItem('usertype' , res[0].type)
        this.router.navigate(['/home']);
      }
      else{
        this.errmsgLogin = "Invalid Email or Password";
      }
    },(err:any)=>{
      console.log(err);
      
    })
    
  }

}
