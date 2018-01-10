import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PrimaryNavbarComponent } from './primary-navbar/primary-navbar.component';

import { ShopifyProductService } from './shopify-product.service';
import { LocationsService } from './locations.service';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavbarComponent,
    ProductsComponent,
    HomePageComponent,
    LocationsPageComponent,
    AboutPageComponent,
    FooterComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ShopifyProductService, LocationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
