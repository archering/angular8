import { Component, OnInit } from '@angular/core';
import { TabService } from '../services/tab-service.service';

@Component({
  selector: 'app-treemenu',
  templateUrl: './treemenu.component.html',
  styleUrls: ['./treemenu.component.css']
})
export class TreemenuComponent implements OnInit {
  activeButton:number = 1;
  constructor(private tabService:TabService) {

  }


  ngOnInit() {
    this.tabService.activeEvent.subscribe((num)=>{
      this.activeButton = num;
    } );
  }

  active(num:number){
    this.activeButton= num;
    this.tabService.activeEvent.emit(num);
  }

}
