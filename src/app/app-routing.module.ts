import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproComponent } from './addpro/addpro.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { G1Guard } from './g1.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateproComponent } from './updatepro/updatepro.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'addpro',component:AddproComponent},
  {path:'updatepro',component:UpdateproComponent},
  {path:'cart',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
