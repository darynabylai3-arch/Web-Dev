import { Component , Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card.component/product-card.component';
import {ProductService} from '../../services/product_service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() selectedProducts!: Product[];
  @Output() deleteEmitterTriggerList= new EventEmitter<number>();

  deleteProduct(id: number){
    this.deleteEmitterTriggerList.emit(id);
  }
  
}

 
