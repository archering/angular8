import { HttpClient, HttpHeaders, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Users{
    id:string;
    name:string;
    nation:string;
    gender:string;
    age:string;
  }

@Injectable({
    providedIn:"root"
})  
export default class GetUserService {
    users:{id:string,name:string,nation:string,gender:string,age:string}[] = [];
    userid:string = "1233322";
    constructor(private httpClient:HttpClient){
     
    }

    getUsers(){
        return this.httpClient.get("./server/user.json");
    }
    getUsers2(){
        this.httpClient.get("./server/user.json",{
            observe:"response", // 默认是body 就是数据部分，其他的如header之类的都屏蔽掉了
            //observe：”events“  你可以监听到 http请求的各个阶段， 这样方便在这些阶段做事情
            responseType:"json", //默认是json
            headers: new HttpHeaders().set("key","value").set("key2","123")
        }).subscribe( (dat:any)=>{
            console.log(dat); //返回的就不仅仅是数据本身  { body:{}, headers:{}, status:200, statusText:"ok"  ....}
        } );
    }

    getUsers3(){
        this.httpClient.get("./server/user.json",{
            observe:"events",  //你可以监听到 http请求的各个阶段， 这样方便在这些阶段做事情
            headers: new HttpHeaders().set("key","value").set("key2","123")
        }).subscribe( (event:HttpEvent<Object>)=>{
            console.log(event.type); 
        } );
    }


    getUsers4(){
        this.httpClient.get("./server/user.json?id="+this.userid,{
            observe:"body",  
            params: new HttpParams().set("name","zhang")
        }).subscribe( (dat:object)=>{
            console.log(dat); 
        } );
    }

        // 使用httpRequest 获得更多的信息
    getUsers5(){

        const req = new HttpRequest("POST","./server/user.json",{
            withCredentials:true,
            headers:new HttpHeaders().set("key","val"),
            body:{"id":1,"name":"zhang"}
            },
            {
                reportProgress:true,
                params:new HttpParams().set("uid","1111")
            }
        );

        return this.httpClient.request(req);


    }   


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

}