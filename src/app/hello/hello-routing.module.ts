import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoorComponent } from './door/door.component';
import { RenComponent } from './ren/ren.component';


const routes:Routes = [
    {
        path:"",
        redirectTo:"door"
    },
    {
        path:"door",
        component:DoorComponent
    },
    {
        path:"ren",
        component:RenComponent
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
export class HelloRoutingModule {}