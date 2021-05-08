import { Component, OnInit, Input } from '@angular/core';
import { ShopifyProductService } from '../shopify-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ShopifyProductService ]
})
export class ProductsComponent implements OnInit {

  constructor(private shopifyProductService: ShopifyProductService) { }

  @Input() collectionId: string;
  @Input() sectionLabel: string;
  @Input() elementId: string;
  @Input() bottomDescription: string;
  @Input() customClasses: string;

  ngOnInit() {

  }

  ngAfterViewInit() {
  	this.shopifyProductService.displayProducts(this.collectionId, this.elementId);
  }

}
