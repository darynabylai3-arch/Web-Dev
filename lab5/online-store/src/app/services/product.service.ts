import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны', icon: '📱' },
    { id: 2, name: 'Ноутбуки', icon: '💻' },
    { id: 3, name: 'Наушники', icon: '🎧' },
    { id: 4, name: 'Планшеты', icon: '📟' }
  ];

  private products: Product[] = [
    // Смартфоны (categoryId: 1)
    {
      id: 1,
      name: 'Смартфон Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      categoryId: 1,
      description: 'Флагманский смартфон с камерой 200MP и титановым корпусом',
      price: 599990,
      rating: 5,
      reviews: 1250,
      likes: 0,
      imageUrl: 'https://images.samsung.com/kz/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-design.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 Pro Max',
      brand: 'Apple',
      categoryId: 1,
      description: 'Флагманский iPhone с титановым корпусом и A17 Pro',
      price: 629990,
      rating: 5,
      reviews: 2134,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h27/83559838400542.png',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256-gb-sinii-113138420/'
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi 14 Ultra',
      brand: 'Xiaomi',
      categoryId: 1,
      description: 'Профессиональная камера Leica и мощный процессор',
      price: 499990,
      rating: 5,
      reviews: 842,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h42/hfe/84925407428638.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-118111401/'
    },
    {
      id: 4,
      name: 'Смартфон Google Pixel 8 Pro',
      brand: 'Google',
      categoryId: 1,
      description: 'Чистый Android и лучшая камера для фото',
      price: 449990,
      rating: 4,
      reviews: 567,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/hfc/84799305007134.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-115245544/'
    },
    {
      id: 5,
      name: 'Смартфон OnePlus 12',
      brand: 'OnePlus',
      categoryId: 1,
      description: 'Скоростная зарядка и плавный экран 120Hz',
      price: 399990,
      rating: 4,
      reviews: 321,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h49/85113304301598.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-zelenyi-118293427/'
    },

    // Ноутбуки (categoryId: 2)
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Pro 16',
      brand: 'Apple',
      categoryId: 2,
      description: 'M3 Max, 48GB RAM, 1TB SSD, для профессионалов',
      price: 1499990,
      rating: 5,
      reviews: 432,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h0c/84983607377950.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mkwc3-16-gb-512-gb-seryi-128024591/'
    },
    {
      id: 7,
      name: 'Ноутбук ASUS ROG Strix G16',
      brand: 'ASUS',
      categoryId: 2,
      description: 'Игровой ноутбук с RTX 4060 и i9-14900HX',
      price: 899990,
      rating: 5,
      reviews: 287,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h5c/85147134263326.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614jv-n3141-16-gb-1000-gb-seryi-117586362/'
    },
    {
      id: 8,
      name: 'Ноутбук Lenovo Legion 5 Pro',
      brand: 'Lenovo',
      categoryId: 2,
      description: 'Игровой ноутбук с RTX 4060 и экраном 240Hz',
      price: 799990,
      rating: 4,
      reviews: 156,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h30/hd1/84928980221982.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16arx8-82wm00f6rk-32-gb-1000-gb-seryi-114583645/'
    },
    {
      id: 9,
      name: 'Ноутбук Dell XPS 15',
      brand: 'Dell',
      categoryId: 2,
      description: 'Премиальный ультрабук для работы и творчества',
      price: 999990,
      rating: 5,
      reviews: 98,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h38/h6f/84773726273566.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/dell-xps-15-9530-16-gb-1000-gb-seryi-115656467/'
    },
    {
      id: 10,
      name: 'Ноутбук HP Victus 16',
      brand: 'HP',
      categoryId: 2,
      description: 'Доступный игровой ноутбук с RTX 3050',
      price: 499990,
      rating: 4,
      reviews: 215,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h53/85114147635230.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/hp-victus-16-r0005ur-8-gb-512-gb-seryi-117615616/'
    },

    // Наушники (categoryId: 3)
    {
      id: 11,
      name: 'Наушники Apple AirPods Max',
      brand: 'Apple',
      categoryId: 3,
      description: 'Премиальные наушники с активным шумоподавлением',
      price: 299990,
      rating: 5,
      reviews: 876,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h0e/63998561075230.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-101923179/'
    },
    {
      id: 12,
      name: 'Наушники Sony WH-1000XM5',
      brand: 'Sony',
      categoryId: 3,
      description: 'Лучшее шумоподавление и качество звука',
      price: 199990,
      rating: 5,
      reviews: 654,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h89/64548656807966.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-104583396/'
    },
    {
      id: 13,
      name: 'Наушники JBL Tune 760NC',
      brand: 'JBL',
      categoryId: 3,
      description: 'Беспроводные наушники с шумоподавлением',
      price: 49990,
      rating: 4,
      reviews: 432,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h01/64536345804830.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/jbl-tune-760nc-chernyi-104352817/'
    },
    {
      id: 14,
      name: 'Наушники Bose QuietComfort Ultra',
      brand: 'Bose',
      categoryId: 3,
      description: 'Флагманские наушники с иммерсивным звуком',
      price: 249990,
      rating: 5,
      reviews: 187,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h7a/84911523495966.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-117353369/'
    },
    {
      id: 15,
      name: 'Наушники Sennheiser Momentum 4',
      brand: 'Sennheiser',
      categoryId: 3,
      description: 'Аудиофильское качество и стильный дизайн',
      price: 179990,
      rating: 5,
      reviews: 143,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7b/64683023319070.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-wireless-chernyi-106573142/'
    },

    // Планшеты (categoryId: 4)
    {
      id: 16,
      name: 'Планшет Apple iPad Pro 13"',
      brand: 'Apple',
      categoryId: 4,
      description: 'M4 чип, OLED экран, для профессионалов',
      price: 699990,
      rating: 5,
      reviews: 234,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h63/85285817286686.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-m4-8-gb-256-gb-wifi-seryi-119015878/'
    },
    {
      id: 17,
      name: 'Планшет Samsung Galaxy Tab S9 Ultra',
      brand: 'Samsung',
      categoryId: 4,
      description: '14.6" экран, S Pen в комплекте, для работы',
      price: 499990,
      rating: 5,
      reviews: 187,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h54/84908697649182.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-5g-256-gb-serebristyi-113607704/'
    },
    {
      id: 18,
      name: 'Планшет Xiaomi Pad 6',
      brand: 'Xiaomi',
      categoryId: 4,
      description: 'Отличный планшет для учебы и развлечений',
      price: 149990,
      rating: 4,
      reviews: 456,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h08/85114290438174.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-pad-6-6-gb-128-gb-seryi-113992482/'
    },
    {
      id: 19,
      name: 'Планшет Huawei MatePad Pro 11',
      brand: 'Huawei',
      categoryId: 4,
      description: 'Тонкий корпус, отличный экран для работы',
      price: 299990,
      rating: 4,
      reviews: 98,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/hfc/85077515321374.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/huawei-matepad-pro-11-8-gb-256-gb-seryi-118089437/'
    },
    {
      id: 20,
      name: 'Планшет Lenovo Tab P12',
      brand: 'Lenovo',
      categoryId: 4,
      description: 'Большой экран 12.7", отличный для мультимедиа',
      price: 179990,
      rating: 4,
      reviews: 76,
      likes: 0,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h93/had/85255696400414.jpg',
      kaspiLink: 'https://kaspi.kz/shop/p/lenovo-tab-p12-8-gb-256-gb-seryi-118981153/'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}