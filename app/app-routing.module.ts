import { NgModule } 						from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/shop', pathMatch: 'full' },
	{ path: 'shop', component: HomePageComponent },
	{ path: 'locations', component: LocationsPageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'contact', component: ContactPageComponent },
	{ path: '**', redirectTo: '/shop' }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
