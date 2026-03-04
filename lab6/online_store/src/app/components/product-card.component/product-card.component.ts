import { Component, Input,EventEmitter,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  
  
  like(){
    this.product.isLike=!this.product.isLike;
    this.product.likes+=this.product.isLike? 1:-1;
  }
  
  

  @Input() product!: Product;
  @Output() deleteEmitter=new EventEmitter<number>();
  selectedImage: string="";

  deleteEmitterTrigger(){
    this.deleteEmitter.emit(this.product.id);
  }


  ngOnInit() {
    if (this.product && this.product.image) {
      this.selectedImage = this.product.image;
    }
  }



  selectImage(img: string) {
    this.selectedImage = img;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check this product ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  get stars() {
    return Array(Math.round(this.product.rating)).fill(0);
  }
}
