import { Injectable } from '@angular/core';
import Log from './log.service';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private logService:Log) {

    this.logService.format("hello world from log Service");

   }
}
