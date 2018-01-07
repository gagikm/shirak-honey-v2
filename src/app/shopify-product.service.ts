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
	  		productSet: {
	  			styles: {
	  				products: {
	  					'justify-content': 'center',
	  				}
	  			}
	  		},
	  		product: {
	  			text: {
  					button: 'Add to Cart',
 					},
 					width: '80px',
 					styles: {
 						product: {
 							width: '225px',
 							height: '350px',
 						},
 						button: {
 							'background': 'linear-gradient(to bottom,#FCE08B,#f0c14b)',
 							color: 'black',
 							width: '120px',
 							padding: '10px',
 							'border-radius': '3px',
 							border: '1px solid #A2A6AC'
 						},
 						title: {
 							height: '40px',
 						}
 					}
	  		},
	  		cart: {
 					'popup': 'false',
 					styles: {
 						button: {
 							
 						}
 					}
 				},
 				window: {
 					width: 1000,
 				}
	  	}
		});
  } 

}
