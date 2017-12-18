import { Injectable } from '@angular/core';

@Injectable()
export class ShopifyProductService {

  constructor() { }

  displayProducts(collectionId: string, elementId: string): void {
  	var client = (<any>window).ShopifyBuy.buildClient({
	  	domain: 'shirak-test2.myshopify.com',
	  	storefrontAccessToken: '19a8aafa5474068b67279972446d2cf5',
	  	apiKey: '4e0872762c1b1e4327661562cda9a803',
	  	appId: '6'
		});

		var ui = (<any>window).ShopifyBuy.UI.init(client);

		ui.createComponent('collection', {
	  	id: collectionId,
	  	node: document.getElementById(elementId),
	  	options: {
	  		product: {
	  			text: {
  					button: 'Add to Cart',
 					},
 					width: '80px',
	  		},
	  		cart: {
 					popup: false,
 				},
 				window: {
 					width: 1000
 				}
	  	}
		});
  } 

}
