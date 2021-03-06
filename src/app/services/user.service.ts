import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Users{
    id:string;
    name:string;
    nation:string;
    gender:string;
    age:string;
  }

 @Injectable(
     {
         providedIn:"root"
     }
 ) 
export default class UserService {
    users:{id:string,name:string,nation:string,gender:string,age:string}[] = [
        {id:"1322001001",name:"johon",nation:"china",gender:"male",age:"20"},
        {id:"1322001002",name:"downn",nation:"china",gender:"male",age:"20"},
        {id:"1322001003",name:"ericever",nation:"china",gender:"male",age:"20"}
    ]
    constructor(private httpClient:HttpClient){}
    //添加一个新用户
    addUser(newone:Users){
        this.users.push(newone);
    }
    //删除一个老用户
    remove(id:string) {
        this.users = this.users.filter((user:Users)=>{
            return id!== user.id;
        });
    }

    getLoginUser(){
        return this.httpClient.get("./server/user.json");
    }

}