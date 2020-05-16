import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { NationsComponent } from './nations/nations.component';
import { ChinaComponent } from './china.component';


const routes:Routes = [
    {
        path:"china",
        component:ChinaComponent,
        children:[
            {
                path:"lan",
                component:LanguageComponent
            },
            {
                path:"nations",
                component:NationsComponent
            }          
        ]
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
export class ChinaRoutingModule{
}