import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedemoComponent } from './sharedemo/sharedemo.component';
import { SharedModule } from '../shared/shared.module';
import { DemosRoutingModule } from './demos-routing.module';


@NgModule({
  declarations: [
    SharedemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemosRoutingModule
  ]
})
export class DemosModule { }
