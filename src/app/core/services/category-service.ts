import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  getCategories(): Category[] {
    return [
      { id: 1, name: 'Women', description: 'Category for women', imageUrl: 'assets/categories/women.jpg', isEnabled: true },
      { id: 2, name: 'Men', description: 'Category for men', imageUrl: 'assets/categories/men.jpg', isEnabled: true },
      { id: 3, name: 'Kids', description: 'Category for kids', imageUrl: 'assets/categories/kids.jpg', isEnabled: true },
      { id: 4, name: 'Accessories', description: 'Category for accessories', imageUrl: 'assets/categories/accessories.jpg', isEnabled: true } 
    ];
  };

  getCategoryById(id: number): Category | undefined {
    const categories = this.getCategories();
    return categories.find(category => category.id === id);
  }

  getCategoryByName(name: string): Category | undefined {
    const categories = this.getCategories();
    return categories.find(category => category.name.toLowerCase() === name.toLowerCase());
  }

}
