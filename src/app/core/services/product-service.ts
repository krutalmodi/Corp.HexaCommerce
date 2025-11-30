import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  getProducts() {
    return [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 29.99,
        imageUrl: 'assets/products/product1.jpg',
        categoryId: 1,
        productRating: 4.5,
        showAddToCartButton: true,
        isEnabled: true
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 49.99,
        imageUrl: 'assets/products/product2.jpg',
        categoryId: 2,
        productRating: 4.0,
        showAddToCartButton: true,
        isEnabled: true
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 19.99,
        imageUrl: 'assets/products/product3.jpg',
        categoryId: 1,
        productRating: 3.5,
        showAddToCartButton: true,
        isEnabled: true
      }
    ];
  }
}