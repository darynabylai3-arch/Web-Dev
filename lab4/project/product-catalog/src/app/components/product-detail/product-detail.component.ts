import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() id!: number;
  @Output() close = new EventEmitter<void>();
  
  product?: Product;
  selectedImage: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product = this.productService.getProductById(this.id);
    
    if (this.product && this.product.images && this.product.images.length > 0) {
      this.selectedImage = this.product.images[0];
    }
  }

  closeDetail() {
    this.close.emit();
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}