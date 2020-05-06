import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ContentComponent } from './content/content.component';
import { BodyComponent } from './body/body.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MyHoverDirective } from './my-hover.directive';
import { UnlessDirective } from './unless.directive';
import { FormComponent } from './form/form.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CommunicationComponent } from './communication/communication.component';
import { TreemenuComponent } from './treemenu/treemenu.component';
import { ContentpartComponent } from './contentpart/contentpart.component';
import { TabService } from './services/tab-service.service';
import { PlaygroundComponent } from './playground/playground.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AnnComponent } from './ann/ann.component';
import { NestComponent } from './nest/nest.component';
import { OneComponent } from './nest/one/one.component';
import { TwoComponent } from './nest/two/two.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    LeftmenuComponent,
    ContentComponent,
    BodyComponent,
    ListItemComponent,
    MyHoverDirective,
    UnlessDirective,
    FormComponent,
    AdduserComponent,
    UserlistComponent,
    CommunicationComponent,
    TreemenuComponent,
    ContentpartComponent,
    PlaygroundComponent,
    HomeComponent,
    AboutComponent,
    AnnComponent,
    NestComponent,
    OneComponent,
    TwoComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
