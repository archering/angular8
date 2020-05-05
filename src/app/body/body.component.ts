import { Component, OnInit } from '@angular/core';
import Log from '../services/log.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers:[Log]
})
export class BodyComponent implements OnInit {
  value = 1000;
  showme = false;
  listshow:number = 10;
  users = [
    {
      id:"009944549327",
      name:"lee chinm",
      gender:"male",
      photo:"../assets/login.jpg"
    },
    {
      id:"009944549328",
      name:"kim lueny",
      gender:"male",
      photo:"../assets/login.jpg"
    },
    {
      id:"009944549329",
      name:"ericv chna",
      gender:"female",
      photo:"../assets/login.jpg"
    },
    {
      id:"009944549330",
      name:"jim jone",
      gender:"male",
      photo:"../assets/login.jpg"
    }        
  ]

  constructor(private log:Log) { 
  }

  ngOnInit() {
    this.log.format("ngOninit 启动了");
  }

  toggle(){
    this.showme = !this.showme; 
  }

  doRemove(evt:any){
    this.users = this.users.filter( item =>{
      return item.id !== evt.id;
    });
  }

}
