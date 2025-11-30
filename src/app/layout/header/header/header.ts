import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../core/services/category-service';
import { Category } from '../../../core/models/category';

@Component({
  selector: 'app-header', 
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.less'
})
export class Header {
  protected readonly title = signal('HexaCommerce');
  
  private categoryService = inject(CategoryService);
  categories: Category[] = [];

ngOnInit() : void {  
    this.categories = this.categoryService.getCategories();
  }
} 
