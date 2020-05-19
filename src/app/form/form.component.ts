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
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:Users = {id:"",name:"",nation:"china",gender:"male",age:"20"};
  userList:Users[] = [];
  constructor(private userService:UserService) {}

  ngOnInit() {}

  ngDoCheck(){
    this.userList = this.userService.users;
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

  remove(id:string){
    this.userService.remove(id);
  }

}
