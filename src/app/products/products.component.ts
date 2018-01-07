import { Component, OnInit, Input } from '@angular/core';
import { ShopifyProductService } from '../shopify-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private shopifyProductService: ShopifyProductService) { }

  @Input() collectionId: string;
  @Input() collectionLabel: string;
  @Input() elementId: string;

  ngOnInit() {

  }

  ngAfterViewInit() {
  	this.shopifyProductService.displayProducts(this.collectionId, this.elementId);
    document.querySelector('div.shopify-buy__cart-toggle').id = 'cart';
  }

}
