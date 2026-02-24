import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onLike(): void {
    this.like.emit(this.product.id);
  }

  onDelete(): void {
    if (confirm('Удалить этот товар?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareOnWhatsApp(): void {
    const text = `Посмотрите этот товар: ${this.product.name} - ${this.product.price} ₸`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.product.kaspiLink)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const text = `Посмотрите этот товар: ${this.product.name} - ${this.product.price} ₸`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.kaspiLink)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}