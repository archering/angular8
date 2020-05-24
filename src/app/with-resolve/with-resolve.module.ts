import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageResolveComponent } from './page/page.component';
import { WithResolveRoutingModule } from './with-resolve-routing.module';
import { AuthResolveService } from './services/auth-resolve.service';



@NgModule({
  declarations: [
    PageResolveComponent
  ],
  imports: [
    CommonModule,
    WithResolveRoutingModule
  ],
  providers:[AuthResolveService]
})
export class WithResolveModule { }
