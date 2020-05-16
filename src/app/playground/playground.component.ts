import { Component, OnInit } from '@angular/core';
import { GuardService } from '../services/guard.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(private guard:GuardService) { 

  }

  ngOnInit() {
  }

}
