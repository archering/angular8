import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nest',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.css']
})
export class NestComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {

    this.activeRoute.params.subscribe( (params:Params)=>{

    } );
  }

}
