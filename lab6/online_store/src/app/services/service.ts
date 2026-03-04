import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {
      id: 0,
      name: 'All devices'
    },
    {
      id: 1,
      name: 'Smartphones'
    },
    {
      id: 2,
      name: 'Laptops'
    },
    {
      id: 3,
      name: 'Headphones'
    },
    {
      id: 4,
      name: 'Tablets'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}