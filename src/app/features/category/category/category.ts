import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../../../core/services/category-service';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/models/product';
import { Category } from '../../../core/models/category';
import { Productbox } from "../../productbox/productbox";

@Component({
  selector: 'app-category',
  imports: [CommonModule, Productbox],
  templateUrl: './category.html',
  styleUrls: ['./category.less'],
})
export class CategoryComponent implements OnInit {

  products: Product[] = [];
  category?: Category;
  loading: boolean = true;

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) 
    {}

  ngOnInit() {
    
    const categoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.category = this.categoryService.getCategoryById(categoryId);
    if (this.category) {
      this.products = this.productService.getProductsByCategoryId(this.category.id);
    }
    this.loading = false;
  }
}
