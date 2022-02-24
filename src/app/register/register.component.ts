import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passmatch } from 'src/passmatch';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register:any;
  public errmsg:any;
  constructor(private fb:FormBuilder, private crud:CrudService) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      name:['',[Validators.required, Validators.minLength(2),Validators.maxLength(12)]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      cpassword:['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      age:['',[Validators.required, Validators.min(18)]]
    },
    {
      validator: passmatch('password', 'cpassword')
    },
    );
  }
  registersubmit(){
    delete this.register.value.cpassword;

    var path = `users?email=${this.register.value.email}`
    
    console.log(path);
    
    this.crud.getData(path).subscribe((res:any)=>{
      console.log(res);
      
      if(res['length']>0){
        this.errmsg = 'Email Already Exist'
      }
      else{
        this.crud.postData('users',this.register.value).subscribe((res:any)=>{
          console.log(res);
          this.errmsg = 'User Added'
          
          this.register.reset(); 
        },(err)=>{
          console.log(err);
          
        });
      }
      
    
    },(err)=>{
      console.log(err);
      
    })
    }
  }
