import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { ResultComponent } from './result/result.component';
import { FormDataService }    from './data/form-data.service';
import {PropertiesComponent} from './properties/properties.component';
const providers = []

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    MenuComponent,
    AnnonceListComponent,
    UpdateAnnonceComponent,
    ResultComponent,
    PropertiesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }
   ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }


@NgModule({})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    }
  }
}
