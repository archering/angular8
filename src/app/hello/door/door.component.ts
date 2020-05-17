import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake.service';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  constructor(private fake:FakeService) { }

  ngOnInit() {
    this.fake.fakeit();
  }

}
