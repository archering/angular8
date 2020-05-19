import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { BarComponent } from './bar/bar.component';
import { SlotRoutingModule } from './slot-routing.module';
import { SlotComponent } from './slot.component';



@NgModule({
  declarations: [PageComponent, BarComponent,SlotComponent],
  imports: [
    CommonModule,
    SlotRoutingModule
  ]
})
export class SlotModule { }
