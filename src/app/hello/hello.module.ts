import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorComponent } from './door/door.component';
import { RenComponent } from './ren/ren.component';
import { HelloRoutingModule } from './hello-routing.module';

@NgModule({
  declarations: [
    DoorComponent, 
    RenComponent],
  imports: [
    CommonModule,
    HelloRoutingModule
  ]
})
export class HelloModule { }
