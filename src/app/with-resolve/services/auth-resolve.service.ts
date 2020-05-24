import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import UserService from 'src/app/services/user.service';
import { Injectable } from '@angular/core';

interface Permission{
    id:string;
    name:string;
    access:object;
    level:number
}


interface User{
    id:string;
    name:string;
    nation:string;
    gender:string;
    age:string;
  }

@Injectable()
export class AuthResolveService implements Resolve<Permission>{

    constructor(private userService:UserService){

    }

    resolve(ARS:ActivatedRouteSnapshot,RSS:RouterStateSnapshot):Observable<Permission> | Promise<Permission> | Permission{
        let promise:Promise<Permission> = new Promise((resolve) =>{
            let theuser:any; 
            this.userService.getLoginUser().subscribe( (users:User[])=>{  
                for(let i=0;i<users.length;i++){
                    if(users[i].id === "1322001002"){
                        theuser = users[i];
                        break;
                    }
                }
                theuser["access"] = { name:"all", key:"30001" };
                theuser["level"] = 3;
                delete theuser.gender;
                delete theuser.age;
                delete theuser.nation;
                resolve(theuser);
            });            
        });
        return promise;
        
    }
}