import { Component, OnInit, Input } from '@angular/core';
import UserService from '../services/user.service';

interface Users{
  id:string;
  name:string;
  nation:string;
  gender:string;
  age:string;
}

@Component({
  selector: 'user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userlist:Users[] = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.userlist = this.userService.users;
  }

  remove(id:string){
    this.userService.remove(id);
  }


}
