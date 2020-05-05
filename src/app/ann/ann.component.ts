import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ann',
  templateUrl: './ann.component.html',
  styleUrls: ['./ann.component.css']
})
export class AnnComponent implements OnInit {

  user:{name:string,age:number};
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.params["name"]){
      this.user = {
          name:this.activeRoute.snapshot.params["name"],
          age:Number(this.activeRoute.snapshot.params["age"])
      } 


    }

    this.activeRoute.params.subscribe( (params:Params)=>{
      this.user.name = params['name'];
      this.user.age = params['age'];
    } );

   

  }

}
