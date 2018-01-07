import { NgModule } 						from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomePageComponent },
	{ path: 'locations', component: LocationsPageComponent },
	{ path: 'about', component: AboutPageComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
