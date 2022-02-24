import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class G1Guard implements CanActivate {

  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var ans_name = localStorage.getItem('name');
      console.log("In g1 Guard");
      console.log(ans_name);

      if(ans_name===null){
        this.router.navigate(['/register']);
        return false;
      }
      else{
        return true;
      }
  }
  
}
