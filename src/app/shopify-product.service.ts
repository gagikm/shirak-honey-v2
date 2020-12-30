import { Injectable } from "@angular/core";

@Injectable()
export class ShopifyProductService {
  constructor() {}

  displayProducts(collectionId: string, elementId: string): void {
    if ((<any>window).ShopifyBuy) {
      var client = (<any>window).ShopifyBuy.buildClient({
        domain: "shirakhoney.myshopify.com",
        storefrontAccessToken: "19a8aafa5474068b67279972446d2cf5",
        apiKey: "2609f903c684ece969b8b36bcfd2f607",
        appId: "6"
      });

      var ui = (<any>window).ShopifyBuy.UI.init(client);

      ui.createComponent("collection", {
        id: collectionId,
        node: document.getElementById(elementId),
        options: {
          productSet: {
            styles: {
              products: {
                "justify-content": "center"
              }
            }
          },
          product: {
            events: {
              afterRender: function() {
                var placeholder = <HTMLElement>document.getElementsByClassName(elementId)[0];
                placeholder.style["display"] = "none";

                window.open = function(open) {
                  return function (url, name, features) {
                    // Pass through non-shopify URLS
                    if (url.indexOf("myshopify") < 0) {
                      return open.call(window, url, name, features);
                    }

                    // Use current window
                    console.log("Redirecting to:", url);
                    window.location.href = url;
                    return null;
                  };
                }(window.open);
              }
            },
            layout: "vertical",
            buttonDestination: "cart",
            isButton: false,
            contents: {
              button: true,
              imgWithCarousel: true,
              variantId: "all",
              description: false,
              options: false
            },
            text: {
              button: "Add to Cart"
            },
            width: "160px",
            classes: {
              shopifyProduct: 'shopify-buy__btn--parent'
            },
            styles: {
              shopifyProduct: {
                'outline': 'none !important'
              },
              product: {
                width: "200px"
              },
              button: {
                background: "linear-gradient(to bottom,#37a6f2,#2683c1)",
                color: "white",
                width: "120px",
                padding: "10px",
                "border-radius": "3px",
                "font-weight": "500",
                ":hover": {
                  background: "linear-gradient(to bottom,#35aeff,#2f94d8)"
                }
              },
              title: {
                height: "40px"
              }
            }
          },
          toggle: {
            classes: {
              cartIcon: 'shopify-buy__icon-cart__group',
            },
            styles: {
              cartIcon: {
                'fill': 'black',
              },
              toggle: {
                "background-color": "#ffd872",
                color: "black",
                ":hover": {
                  "background-color": "#fcd15f",
                }
              }
            }
          },
          cart: {
            "contents": {
              "button": true
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
                background: "linear-gradient(to bottom,#FCE08B,#f0c14b)",
                color: "black",
                "border-style": "solid",
                "border-width": "1px",
                "border-color": "#a2a6ac #979aa1 #82858a",
                "border-radius": "3px"
              }
            }
          },
          window: {
            width: 1000
          },
          modal: {
            styles: {
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
              imgWithCarousel: true
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
                "@media (min-width: 601px)": {
                  height: "100%"
                }
              },
              button: {
                background: "linear-gradient(to bottom,#FCE08B,#f0c14b)",
                color: "black",
                ":hover": {
                  background: "linear-gradient(to bottom,#f5d78e,#eeb933)"
                }
              }
            }
          }
        }
      });
    }
  }
}
