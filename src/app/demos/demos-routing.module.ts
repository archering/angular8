import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedemoComponent } from './sharedemo/sharedemo.component';


const routes:Routes = [
    {
        path:"",
        redirectTo:"shared"
    },
    {
        path:"shared",
        component:SharedemoComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class DemosRoutingModule{

}