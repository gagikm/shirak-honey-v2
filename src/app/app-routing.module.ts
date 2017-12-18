import { NgModule } 						from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'locations', component: LocationsPageComponent }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
