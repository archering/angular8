import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  show = false;
  showme = 0;
  blueClass = 1;

  users = [
    {
      id: 1,
      name:"zahng"
    },
    {
      id: 2,
      name:"china"
    },
    {
      id: 3,
      name:"usacsads"
    },
    {
      id: 4,
      name:"354sdfs3"
    }            
  ]

  constructor() { }

  ngOnInit() {
  }

  doclick(){
    alert(123);
  }

  typing(evt:MouseEvent){
    console.log(evt.target);
  }

  toggle(){
    this.show = !this.show;
  }

  toggle2(){
    this.showme = 1 - this.showme;
  }

}
