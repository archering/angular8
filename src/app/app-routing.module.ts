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
    component: AnnComponent
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
    path:"**",// cache all not-matched url 
    redirectTo:"notfound"
  }
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
