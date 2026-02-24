import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { ProductService } from './app/services/product.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(),
    ProductService
  ]
}).catch(err => console.error(err));