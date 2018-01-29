import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PrimaryNavbarComponent } from './primary-navbar/primary-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { ProductsComponent } from './products/products.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { APP_BASE_HREF } from '@angular/common';
import { LocationsService } from './locations.service';
import { ShopifyProductService } from './shopify-product.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PrimaryNavbarComponent,
        FooterComponent,
        HomePageComponent,
        LocationsPageComponent,
        ProductsComponent,
        ContactPageComponent,
        AboutPageComponent
      ],
      imports: [
        AppRoutingModule,
        NgbModule.forRoot()
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        ShopifyProductService,
        LocationsService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
