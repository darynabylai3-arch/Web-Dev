import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-list',  
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  @Input() categoryId!: number;
  
  private productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProductsByCategory(this.categoryId);
  }

  onLike(productId: number): void {
    this.productService.likeProduct(productId);
    this.loadProducts();
  }

  onDelete(productId: number): void {
    this.productService.deleteProduct(productId);
    this.loadProducts();
  }
}