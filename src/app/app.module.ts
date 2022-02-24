import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddproComponent } from './addpro/addpro.component';
import { UpdateproComponent } from './updatepro/updatepro.component';
import { DeleteProComponent } from './delete-pro/delete-pro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddproComponent,
    UpdateproComponent,
    DeleteProComponent,
    NavBarComponent,
    HomeComponent,
    CartComponent,
    FilterPipe,
    LogoutComponent,
    NewproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
