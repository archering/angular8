import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language/language.component';
import { NationsComponent } from './nations/nations.component';
import { ChinaRoutingModule } from './china-routing.module';
import { ChinaComponent } from './china.component';


@NgModule({
  declarations: [
     LanguageComponent,
     NationsComponent,
     ChinaComponent
    ],
  imports: [
    CommonModule,
    ChinaRoutingModule
  ]
})
export class ChinaModule { }
