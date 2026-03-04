import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list.component/product-list.component';
import {CategoryService} from './services/service';
import { CommonModule } from '@angular/common';
import { Category } from './models/category.model';
import {ProductService} from '../app/services/product_service';
import { Product } from './models/product.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent,CommonModule],
  
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  categories: Category[]=[];
  selectedCategory!: Category;
  products: Product[]=[];


  // contructor how to get data from Service
  constructor(private categoryService: CategoryService,
              private productService:ProductService
  ){
    this.categories=this.categoryService.getCategories();
    this.products=productService.getProducts();

  }
  
  SelectCategory(category: Category) {
    this.selectedCategory = category;
    console.log(typeof this.selectedCategory.id);
  }
  delete(id:number){
    let a=confirm('Are u sure?');
    if(a){
      this.products = this.products.filter(
      product => product.id !== id
);
    }
  }
  getSelectedProducts(){
    if(!this.selectedCategory){
      return this.products
    }
    if(this.selectedCategory.id==0){
      return this.products
    }

    return this.products.filter( product => product.categoryId === this.selectedCategory.id)
  }

  

  
  
  

}
