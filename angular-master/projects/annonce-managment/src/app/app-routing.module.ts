import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ResultComponent } from './result/result.component';
import { PropertiesComponent } from './properties/properties.component'

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'annonces', component: AnnonceListComponent },
{ path: 'update/:id', component: UpdateAnnonceComponent },
{ path: 'add', component: AnnonceComponent },
{ path: 'result',  component: ResultComponent},
{ path: 'properties',  component: PropertiesComponent},
{ path: '',   redirectTo: '/add', pathMatch: 'full' },
{ path: '**', component: AnnonceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
