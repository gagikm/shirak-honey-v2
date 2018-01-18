import { Injectable } from "@angular/core";

@Injectable()
export class ShopifyProductService {
  constructor() {}

  displayProducts(collectionId: string, elementId: string): void {
    var client = (<any>window).ShopifyBuy.buildClient({
      domain: "shirak-test2.myshopify.com",
      storefrontAccessToken: "19a8aafa5474068b67279972446d2cf5",
      apiKey: "4e0872762c1b1e4327661562cda9a803",
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
          layout: "vertical",
          isButton: "true",
          buttonDestination: "modal",
          contents: {
            imgWithCarousel: true,
            variantId: "all",
            description: false,
            options: false
          },
          text: {
            button: "View Item"
          },
          width: "160px",
          styles: {
            product: {
              width: "225px"
            },
            button: {
              background: "linear-gradient(to bottom,#FCE08B,#f0c14b)",
              color: "black",
              width: "120px",
              padding: "10px",
              "border-radius": "3px",
              border: "1px solid #A2A6AC"
            },
            title: {
              height: "40px"
            }
          }
        },
        toggle: {
          events: {
            afterRender: function() {
              document.getElementsByClassName("shopify-buy-frame--toggle")[0]
                .style["boxShadow"] = "rgba(0, 0, 0, 0.15) 0px 3pt 12pt";
            }
          },
          styles: {
            toggle: {
              "background-color": "#3498db",
              ":hover": {
                "background-color": "#3489db"
              }
            }
          }
        },
        cart: {
          popup: false,
          styles: {
            button: {
              "background-color": "#3498db",
              ":hover": {
                "background-color": "#3489db"
              }
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
            button: "Add to Cart"
          },
          contents: {
            imgWithCarousel: true
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                height: "100%"
              }
            }
          }
        }
      }
    });
  }
}
