import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PrimaryNavbarComponent } from './primary-navbar/primary-navbar.component';

import { ShopifyProductService } from './shopify-product.service';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavbarComponent,
    ProductsComponent,
    HomePageComponent,
    LocationsPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ShopifyProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
