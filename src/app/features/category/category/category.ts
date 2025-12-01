import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../../../core/services/category-service';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/models/product';
import { Category } from '../../../core/models/category';
import { Productbox } from "../../productbox/productbox";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  imports: [CommonModule, Productbox],
  templateUrl: './category.html',
  styleUrls: ['./category.less'],
})
export class CategoryComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  category?: Category;
  loading: boolean = true;

  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {}

  ngOnInit() {
    // Subscribe to route param changes so the component updates when the id changes
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        const categoryId = Number(params.get('id'));
        this.loadCategory(categoryId);
      });
  }

  private loadCategory(categoryId: number) {
    this.loading = true;
    this.category = this.categoryService.getCategoryById(categoryId);
    if (this.category) {
      this.products = this.productService.getProductsByCategoryId(this.category.id);
    } else {
      this.products = [];
    }
    this.loading = false;
  }

  trackById(index: number, item: Product) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
