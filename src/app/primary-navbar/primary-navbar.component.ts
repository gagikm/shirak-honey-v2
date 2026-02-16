import { Component, OnInit } from '@angular/core';
import { ShopifyProductService } from '../shopify-product.service';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.css']
})
export class PrimaryNavbarComponent implements OnInit {

  title = 'Shirak Honey';
  public isCollapsed = true;

  constructor(private shopifyProductService: ShopifyProductService) { }

  ngOnInit() {
  }

  public toggleCart(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // First try using the service (reliable method)
    if (this.shopifyProductService.ui) {
      this.shopifyProductService.toggleCart();
      return;
    }

    // Fallback: Try to find the toggle element (verified as div on production)
    console.warn("Shopify Service UI not ready, falling back to DOM selector.");
    let toggle = document.querySelector('.shopify-buy-frame--toggle') as HTMLElement;

    // Fallback: aria-label
    if (!toggle) {
      toggle = document.querySelector('div[aria-label="cart"]') as HTMLElement;
    }

    // Fallback: iframe data attribute (sometimes used by Shopify)
    if (!toggle) {
      toggle = document.querySelector('iframe[name="frame-cart"]') as HTMLElement;
    }

    if (toggle) {
      toggle.click();
    } else {
      // Legacy fallback
      const cartElement = document.getElementById("cart");
      if (cartElement) {
        cartElement.click();
      } else {
        console.warn("Shopify Cart toggle not found. Please ensure a product is added to cart.");
        alert("Please add an item to the cart first to view it.");
      }
    }
  }

  public toggleMenuIfMobile() {
    if (window.innerWidth <= 767) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
