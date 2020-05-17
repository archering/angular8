import { Component, OnInit } from '@angular/core';
import GetUserService from '../services/getUser.service';
interface Users{
  id:string;
  name:string;
  nation:string;
  gender:string;
  age:string;
}
@Component({
  selector: 'app-formhttp',
  templateUrl: './formhttp.component.html',
  styleUrls: ['./formhttp.component.css']
})
export class FormhttpComponent implements OnInit {
  userList:Users[] = [];
  constructor(private userservice:GetUserService) { 
    this.userservice.getUsers();
  }

  ngOnInit() {
    this.userservice.getUsers().subscribe( (users:Users[])=>{
      this.userList = users;
    });

    this.userservice.getUsers2();//测试返回全量数据


    this.userservice.getUsers3(); //测试返回event type 0 发送阶段 ， 4 获得数据返回阶段

    this.userservice.getUsers5().subscribe( (dat:any)=>{
      console.log(dat);//这里获得 http 请求的 0 ，1，2，3，4   阶段的信息
    });




  }

}
