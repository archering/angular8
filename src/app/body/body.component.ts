import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  doRemove(evt:any){
    this.users = this.users.filter( item =>{
      return item.id !== evt.id;
    });
  }

}
