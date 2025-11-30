import { Component } from '@angular/core';
import { Product } from '../../core/models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productbox',
  imports: [CommonModule],
  templateUrl: './productbox.html',
  styleUrl: './productbox.less',
})
export class Productbox {
  Product: Product | undefined;
  
  ngOnInit() {
    // Placeholder product data
    this.Product = {
      id: 1,
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: 29.99,
      imageUrl: 'assets/sample-product.jpg',
      categoryId: 1,
      productRating: 4.5,
      showAddToCartButton: true,
      isEnabled: true
    };
  } 
}
