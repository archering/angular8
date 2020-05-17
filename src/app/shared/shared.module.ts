import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPipe } from './order.pipe';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ShowDirective } from './show.directive';



@NgModule({
  declarations: [
    OrderPipe,
    KitchenComponent, 
    ShowDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OrderPipe,
    KitchenComponent, 
    ShowDirective    
  ]
})
export class SharedModule { }
