import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

    constructor(private authService:AuthService,private router:Router ){

    }

    canActivate(ars:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.permission().then((bool:boolean)=>{
            if(bool){
                return bool;
            }else {
                this.router.navigate(["unauthorize"])
            }
        });
    }
 
}
