import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorComponent } from './door/door.component';
import { RenComponent } from './ren/ren.component';

@NgModule({
  declarations: [DoorComponent, RenComponent],
  imports: [
    CommonModule
  ]
})
export class HelloModule { }
