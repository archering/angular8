import { Component, OnInit } from '@angular/core';
import { TabService } from '../services/tab-service.service';

@Component({
  selector: 'app-contentpart',
  templateUrl: './contentpart.component.html',
  styleUrls: ['./contentpart.component.css']
})
export class ContentpartComponent implements OnInit {
  activeTab:number = 1;
  constructor(private tabService:TabService) { 
    
  }

  ngOnInit() {
    this.tabService.activeEvent.subscribe( (num)=>{
        this.activeTab = num;
    });
  }

  active(num:number) {
    this.activeTab = num;
    this.tabService.activeEvent.emit(num);
  }

}
