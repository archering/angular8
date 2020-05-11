import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ann',
  templateUrl: './ann.component.html',
  styleUrls: ['./ann.component.css']
})
export class AnnComponent implements OnInit {

  user:{name:string,age:number};
  errorMessage:string;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {

    console.log(this.activeRoute.snapshot.data["warning"]);

 


    if(this.activeRoute.snapshot.params["name"]){
      this.user = {
          name:this.activeRoute.snapshot.params["name"],
          age:Number(this.activeRoute.snapshot.params["age"])
      } 


    }

    this.activeRoute.params.subscribe( (params:Params)=>{
      if(params['name']) this.user.name = params['name'];
      if(params['age']) this.user.age = params['age'];
    } );
   

  }

  ngDoCheck() { 
    this.activeRoute.data.subscribe( (data)=>{
      this.errorMessage = data["warning"];
    });
  }

}
