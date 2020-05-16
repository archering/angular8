import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string = "about work";
  tl:string = this.title;
  constructor(private router:Router) {


   }

  ngOnInit() {
  }

  navi(){
    this.router.navigate(["/annie","benshan",99],
                         {
                           queryParams:{"abc":1,"edit":true},
                           fragment:"xian"
                         }
    );   
  }

  deal(){
    this.tl = this.title;
  }

}
