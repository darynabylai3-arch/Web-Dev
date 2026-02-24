import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'ArrowX Pro 2',
      brand: 'белый',
      category: 'Наушники',
      rating: 4,
      reviews: 1288,
      price: 4990,
      monthlyPrice: 1664,
      imageUrl: 'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
      images: [
        'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg'
      ],
      description: 'Беспроводные наушники с шумоподавлением, высококачественным звуком и длительным временем работы.'
    },
    {
      id: 2,
      name: 'Напольный штатив Jmay MT-36',
      brand: 'черный',
      category: 'Штатив',
      rating: 4,
      reviews: 1254,
      price: 3990,
      monthlyPrice: 1330,
      code: '103584049',
      imageUrl: 'https://m.media-amazon.com/images/I/41a0x1iGvzL._AC_.jpg',
      images: [
        'https://m.media-amazon.com/images/I/41a0x1iGvzL._AC_.jpg',
        'https://m.media-amazon.com/images/I/41xVx8LtJPL._AC_.jpg',
        'https://m.media-amazon.com/images/I/41kXlXmXGaL._AC_.jpg'
      ],
      description: 'Напольный штатив из алюминия, высота до 156 см, нагрузка до 3 кг.'
    },
    {
      id: 3,
      name: 'Наушники Air pro 2',
      brand: 'белый',
      category: 'Наушники',
      rating: 4,
      reviews: 2243,
      price: 2250,
      monthlyPrice: 750,
      imageUrl: 'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
      images: [
        'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg'
      ],
      description: 'Беспроводные наушники с отличным качеством звука и удобной посадкой.'
    },
    {
      id: 4,
      name: 'Наушники Zhang Kai S27',
      brand: '',
      category: 'Наушники',
      rating: 4,
      reviews: 856,
      price: 3290,
      monthlyPrice: 1097,
      badge: '3% Б',
      features: ['ENC', 'Забудьте о городских шумах!', 'До 72ч', 'Батарея которая не подведет'],
      imageUrl: 'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
      images: [
        'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg'
      ],
      description: 'Наушники с активным шумоподавлением и длительным временем работы до 72 часов.'
    },
    {
      id: 5,
      name: 'Наушники UNIVERSAL RM-L1088',
      brand: 'Samsung',
      category: 'Аудио',
      rating: 4,
      reviews: 532,
      price: 1890,
      monthlyPrice: 630,
      imageUrl: 'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
      images: [
        'https://m.media-amazon.com/images/I/61f1YfTkTEL._AC_UF1000,1000_QL80_.jpg',
        'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg'
      ],
      description: 'Универсальные наушники для повседневного использования.'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}