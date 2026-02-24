import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component'; // ЭТОТ ИМПОРТ ВАЖЕН!
import { ProductService } from './services/product.service';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], // Убедитесь что здесь есть ProductListComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-store';
  private productService = inject(ProductService);
  
  categories: Category[] = this.productService.getCategories();
  selectedCategoryId: number | null = null;

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  clearSelection(): void {
    this.selectedCategoryId = null;
  }
}