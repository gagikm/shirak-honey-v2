import { TestBed, inject } from '@angular/core/testing';

import { ShopifyProductService } from './shopify-product.service';

describe('ShopifyProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductService]
    });
  });

  it('should be created', inject([ShopifyProductService], (service: ShopifyProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should not exist', () => {
    expect((<any>window.ShopifyBuy)).toBeFalsy();
  });
});
