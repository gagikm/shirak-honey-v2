import { NgModule } 						from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/shop-local-sacramento-honey', pathMatch: 'full' },
	{ path: 'shop-local-sacramento-honey', component: HomePageComponent },
	{ path: 'sacramento-locations', component: LocationsPageComponent },
	{ path: 'about-shirak-honey-sacramento', component: AboutPageComponent },
	{ path: 'contact-us-sacramento', component: ContactPageComponent },
	{ path: '**', redirectTo: '/shop-local-sacramento-honey' }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
