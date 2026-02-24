import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-catalog';
  products: Product[];
  selectedProductId: number | null = null;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  onProductClick(id: number) {
    this.selectedProductId = id;
  }

  closeDetail() {
    this.selectedProductId = null;
  }
}