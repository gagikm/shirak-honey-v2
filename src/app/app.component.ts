import { Component } from '@angular/core';
import { PrimaryNavbarComponent } from './primary-navbar/primary-navbar.component';
import { ShopifyProductService } from './shopify-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ShopifyProductService ]
})
export class AppComponent {
	title = 'app'
}
