import { Component, OnInit } from '@angular/core';
import UserService from '../services/user.service';
interface Users{
  id:string;
  name:string;
  nation:string;
  gender:string;
  age:string;
}
@Component({
  selector: 'add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user:Users = {id:"",name:"",nation:"china",gender:"male",age:"20"};
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  
  doAdd(){
    if(this.user.name) {
      this.user.id = Date.now().toString();
      this.user.nation = this.user.nation||"china";
      this.user.gender = this.user.gender||"male";
      this.userService.addUser(this.user);
      this.user = {id:"",name:"",nation:"",gender:"",age:""};
    }else{
      alert("请填写姓名");
    }
  }

}
