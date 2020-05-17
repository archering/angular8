import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(private fake:FakeService) { }

  ngOnInit() {
    this.fake.fakeit(); //在app.module 里面已经providers的service 无需再子module ，lazyload module中再次providers
  }

}
