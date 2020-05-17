import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AnnComponent } from './ann/ann.component';
import { NestComponent } from './nest/nest.component';
import { OneComponent } from './nest/one/one.component';
import { TwoComponent } from './nest/two/two.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormComponent } from './form/form.component';
import { BodyComponent } from './body/body.component';
import { CommunicationComponent } from './communication/communication.component';
import { UnautoorizeComponent } from './unautoorize/unautoorize.component';
import { GuardComponent } from './guard/guard.component';
import { GuardService } from './services/guard.service';
import { DpipeComponent } from './dpipe/dpipe.component';


const routes:Routes = [
  {
    path:'',  //默认路由
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'body',
    component: BodyComponent
  },
  {
    path:'comm',
    component: CommunicationComponent
  },
  {
    path:'annie',
    component: AnnComponent,
    data:{"warning":"this is an emergency"}
  }, 
  {
    path:'annie/:name/:age',
    component: AnnComponent
  },
  {
    path:'nested',
    component:NestComponent,
    children:[
      {
        path:"one",
        component:OneComponent
      },
      {
        path:"two",
        component:TwoComponent
      }     
    ]
  } ,
  {
    path:"notfound",
    component:NotFoundPageComponent
  },
  {
    path:"guard",// cache all not-matched url 
    canActivate:[GuardService],
    component:GuardComponent
  },  
  {
    path:"pipe",// cache all not-matched url 
    component: DpipeComponent
  },
  {
    path:"hello",
    loadChildren:()=>import('./hello/hello.module').then( (mod:any)=>{ return mod.HelloModule } )
  },   
  {
    path:"demos",
    loadChildren:()=>import('./demos/demos.module').then( (mod:any)=>{ return mod.DemosModule } )
  },   
  {
    path:"unauthorize",// cache all not-matched url 
    component:UnautoorizeComponent
  },  
  {
    path:"**",// cache all not-matched url 
    redirectTo:"notfound"
  }
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
