import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewComponentComponent } from './new-component/new-component.component';
import { ChatComponent } from './chat/chat.component';
import { UniversitiesComponent } from './universities/universities.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProposComponentComponent } from './propos-component/propos-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {App1SharedModule} 
       from "../../projects/annonce-managment/src/app/app.module";
import { AnnonceListComponent } from './list/annonce-list.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NewComponentComponent,
    ChatComponent,
    UniversitiesComponent,
    SubscribeComponent,
    ProposComponentComponent,
    ContactComponentComponent,
    AnnonceListComponent,
    DetailsComponent,
    LoginComponent,
    ServiceComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    App1SharedModule.forRoot()
    /*RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:CarouselComponent  },
    { path: 'discover', component:ProposComponentComponent  },
    { path: 'recent', component: NewComponentComponent },
    { path: 'sign', component: ContactComponentComponent }
  ],{useHash:true})*/
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
