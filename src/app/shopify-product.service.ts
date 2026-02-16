import { Injectable } from "@angular/core";

@Injectable()
export class ShopifyProductService {
  public ui: any;

  constructor() { }

  displayProducts(collectionId: string, elementId: string): void {
    if ((<any>window).ShopifyBuy) {
      var client = (<any>window).ShopifyBuy.buildClient({
        domain: "shirakhoney.myshopify.com",
        storefrontAccessToken: "19a8aafa5474068b67279972446d2cf5",
        apiKey: "2609f903c684ece969b8b36bcfd2f607",
        appId: "6"
      });

      this.ui = (<any>window).ShopifyBuy.UI.init(client);
      var ui = this.ui;

      ui.createComponent("collection", {
        id: collectionId,
        node: document.getElementById(elementId),
        options: {
          productSet: {
            contents: {
              pagination: true,
            },
            styles: {
              products: {
                "justify-content": "space-evenly",
                "display": "flex",
                "flex-wrap": "wrap"
              }
            }
          },
          product: {
            events: {
              afterRender: function () {
                var placeholder = <HTMLElement>document.getElementsByClassName(elementId)[0];
                placeholder.style["display"] = "none";
              }
            },
            layout: "vertical",
            isButton: false,
            buttonDestination: "cart",
            contents: {
              image: true,
              quantity: false,
              quantityIncrement: true,
              quantityDecrement: true,
              button: true,
              imgWithCarousel: false,
              variantId: "all",
              options: true
            },
            text: {
              button: "Add to Cart",
              "outOfStock": "Sold Out"
            },
            width: "160px",
            classes: {
              shopifyProduct: 'shopify-buy__btn--parent',
              quantitySelector: 'shopify-buy__quantity-container',
              disabledButton: 'shopify-buy__btn-disabled'
            },
            styles: {
              shopifyProduct: {
                'outline': 'none !important'
              },
              quantitySelector: {
                'display': 'flex',
                'justify-content': 'center'
              },
              product: {
                width: "160px",
                'min-width': 'auto',
                'align-self': 'flex-end',
                "@media (max-width: 767px)": {
                  "margin-bottom": "30px"
                },
                "@media (max-width: 354px)": {
                  "margin-left": "0px"
                }
              },
              button: {
                background: "linear-gradient(to bottom,#004080,#003366)",
                color: "white",
                "border-style": "solid",
                "border-width": "1px",
                "border-color": "#002244",
                "border-radius": "3px",
                "width": "120px",
                "padding": "10px",
                ":hover": {
                  background: "linear-gradient(to bottom,#004c99,#003366)"
                },
              },
              disabledButton: {
                "background-image": "none",
                "background-color": "#ccd9e6 !important",
                "color": "#668099 !important"
              },
              title: {
                height: ""
              }
            }
          },
          toggle: {
            classes: {
              cartIcon: 'shopify-buy__icon-cart__group',
            },
            styles: {
              cartIcon: {
                'fill': 'white',
              },
              toggle: {
                "background-color": "#003366",
                color: "white",
                ":hover": {
                  "background-color": "#002244",
                }
              }
            }
          },
          cart: {
            "contents": {
              "button": true
            },
            "text": {
              "button": "Checkout"
            },
            buttonDestination: "checkout",
            popup: false,
            classes: {
              cartCloseButton: 'shopify-buy__btn--close',
            },
            styles: {
              cartCloseButton: {
                '-webkit-tap-highlight-color': 'transparent',
                '-webkit-focus-ring-color': 'rgba(255, 255, 255, 0)',
              },
              button: {
                background: "linear-gradient(to bottom,#004080,#003366)",
                color: "white",
                "border-style": "solid",
                "border-width": "1px",
                "border-color": "#002244",
                "border-radius": "3px"
              }
            }
          },
          window: {
            width: 1000
          },
          modal: {
            classes: {
              modalProductImage: 'shopify-buy__product__variant-img'
            },
            styles: {
              modalProductImage: {
                "max-height": "100%"
              },
              modal: {
                "@media (min-width: 601px)": {
                  "margin-top": "50px",
                  height: "500px"
                }
              }
            }
          },
          modalProduct: {
            text: {
              button: "Add to Cart",
              outOfStock: "In Store Only"
            },
            contents: {
              imgWithCarousel: false
            },
            styles: {
              price: {
                "text-align": "center !important",
                "width": "100%",
              },
              title: {
                "text-align": "center"
              },
              variantTitle: {
                "text-align": "center !important"
              },
              product: {
                "text-align": "center !important",
                "height": "100%",
                "@media (min-width: 601px)": {
                  height: "100%"
                }
              },
              button: {
                background: "linear-gradient(to bottom,#004080,#003366)",
                color: "white",
                ":hover": {
                  background: "linear-gradient(to bottom,#004c99,#003366)"
                }
              }
            }
          }
        }
      });
    }
  }

  toggleCart(): void {
    if (this.ui) {
      // Check if a cart component already exists
      const carts = this.ui.components.cart;
      if (carts && carts.length > 0) {
        carts[0].toggleVisibility(true);
      } else {
        // If no cart exists, try to create one or warn
        console.warn("No Shopify Cart component found. Initialization might be incomplete.");
        // Fallback to trying to create it if needed, but usually it exists if displayProducts ran
        this.ui.createComponent('cart').then(cart => {
          cart.toggleVisibility(true);
        }).catch(err => {
          console.error("Failed to create cart:", err);
          // Fallback to alert if valid
          alert("Please add an item to the cart first.");
        });
      }
    } else {
      console.warn("Shopify UI not initialized yet.");
      alert("Please add an item to the cart first.");
    }
  }
}
