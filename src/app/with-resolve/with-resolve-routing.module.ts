import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageResolveComponent } from './page/page.component';
import { AuthResolveService } from './services/auth-resolve.service';

const routes:Routes = [
    {
        path:"resolve",
        component:PageResolveComponent,
        resolve:{ the: AuthResolveService }
    }
];
@NgModule({ 
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
 })
export class WithResolveRoutingModule{

}