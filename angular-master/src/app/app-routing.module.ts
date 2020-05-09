import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { UniversitiesComponent } from './universities/universities.component';
import { ProposComponentComponent } from './propos-component/propos-component.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AnnonceListComponent } from './list/annonce-list.component';

const routes: Routes = [
{ path: 'home', component: CarouselComponent},
{ path: 'about', component: ProposComponentComponent },
{ path: 'new', component: NewComponentComponent},
{ path: 'login', component: ContactComponentComponent },
{ path: 'ecole/:nom', component: AnnonceListComponent },
{ path: 'search/:name/:type/:capacity', component: AnnonceListComponent },
{ path: 'details/:id', component: DetailsComponent },
{ path: '**', redirectTo:'/home '}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
