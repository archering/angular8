import { Component, OnInit } from '@angular/core';
import { AuthResolveService } from '../services/auth-resolve.service';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageResolveComponent implements OnInit {
  desc:string;
  constructor(private ARS:AuthResolveService,
             private activeRouter:ActivatedRoute,private router:Router) { 

    this.activeRouter.data.subscribe( (data:Data)=>{
      let dat = data["the"];//这里的access 必须和router上定义的一致
        if(dat.level > 2 && dat.access.key === "30001") {
            this.desc = "you have right to do this";
        }else {
          this.router.navigate(["unauthorize"]);
        }
    });

  }

  ngOnInit() {
  }

}
