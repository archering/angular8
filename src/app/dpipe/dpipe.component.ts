import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dpipe',
  templateUrl: './dpipe.component.html',
  styleUrls: ['./dpipe.component.css']
})
export class DpipeComponent implements OnInit {

  willupper="show me uppcase use pipe uppercase";
  now = new Date();
  constructor() { }

  ngOnInit() {
  }

}
