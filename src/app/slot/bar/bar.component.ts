import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slot-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  ran:string = Date.now().toString();
  constructor() { }

  ngOnInit() {
  }

}
