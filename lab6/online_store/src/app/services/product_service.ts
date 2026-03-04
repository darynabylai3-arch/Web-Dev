import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

    products: Product[] = [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        description: 'Apple flagship smartphone with A17 Pro chip and titanium design.',
        price: 599000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9b/h62/86319883485214.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=235235100',
        likes: 0 ,
        categoryId:1,
        isLike: false,
      },
      
  
      {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Premium Android smartphone with powerful camera and S-Pen.',
        price: 580000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h16/h23/84963123527710.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=235235100',
        likes: 0 ,
        categoryId:1,
                isLike: false,

      },
      {
        id: 3,
        name: 'MacBook Air M1',
        description: 'Lightweight laptop with Apple M1 chip and all-day battery.',
        price: 620000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
        likes: 0,
        categoryId:2,
                isLike: false,

      },
      
      {
        id: 4,
        name: 'Sony WH-1000XM5',
        description: 'Industry-leading noise cancelling wireless headphones.',
        price: 210000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=235235100',
        likes: 0 ,
        categoryId:3,
                isLike: false,

      },
      
      {
        id: 6,
        name: 'Xiaomi Robot Vacuum X10',
        description: 'Smart robot vacuum cleaner with powerful suction.',
        price: 180000,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/pd6/6400041.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p17/pd6/6400042.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfb/pd5/6400043.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pdf/pd5/6400044.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-106980049/',
        likes: 0 ,
        categoryId:5,
                isLike: false,

      },
      {
        id: 7,
        name: 'LG 55” 4K Smart TV',
        description: 'Apple headphone',
        price: 320000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pd3/p0d/3532810.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=235235100',
        likes: 0 ,
        categoryId:3,
                isLike: false,

      },
  
      {
        id: 8,
        name: 'Samsung Galaxy Buds core',
        description: 'Advanced wireless Headphone',
        price: 65000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p02/p7d/53123421.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pe6/p7c/53123422.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pca/p7c/53123423.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-chernyi-142551258/?c=235235100',
        likes: 0 ,
        categoryId:3,
                isLike: false,

      },
      {
        id: 9,
        name: 'Apple iPad A16 11 2025 Wi-Fi 11',
        description: 'Next-gen gaming console with ultra-fast SSD and ray tracing.',
        price: 350000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=235235100',
        likes: 0 ,
        categoryId:4,
                isLike: false,

      },
      {
        id: 10,
        name: 'GoPro HERO12',
        description: 'Action camera for extreme adventures and 5.3K video.',
        price: 210000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p1b/pd7/67184221.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h70/hb3/83574234644510.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h6e/83574234841118.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h32/h88/83574235037726.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-12-113156475/?c=750000000',
        likes: 0 ,
        categoryId:5,
                isLike: false,

      },
      {
        id: 11,
        name: 'Iphone 17 Pro',
        description: 'Brand new Iphone',
        price: 788993,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p2a/p84/64167657.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=235235100',
        likes: 0 ,
        categoryId:1,
                isLike: false,

      },
      {
        id: 12,
        name: 'Google Pixel 7 Pro',
        description: 'Brand new Google Iphone',
        price: 278297,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h85/hc5/63603038814238.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb1/hd1/63603039338526.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb1/hd1/63603039338526.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=235235100',
        likes: 0 ,
        categoryId:1,
                isLike: false,

      },
      {
        id: 13,
        name: 'HYDRA Home H20 15.6',
        description: 'Cheap as chips but still good',
        price: 135000,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p08/p47/69607283.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p08/p47/69607283.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=235235100',
        likes: 0 ,
        categoryId:2,
                isLike: false,

      },
      {
        id: 14,
        name: 'Apple MacBook Air 13 2025',
        description: 'Brand new Mackbook Air',
        price: 523596,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p79/pc0/35723930.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=235235100',
        likes: 0 ,
        categoryId:2,
        isLike: false,

      },
      {
        id: 15,
        name: 'HP Victus 15-fb3705ci 15.6',
        description: 'Brand new Mackbook Air',
        price: 699500,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p09/59464043.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p49/p09/59464044.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p82/p09/59464046.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p2d/p09/59464043.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/hp-victus-15-fb3705ci-15-6-16-gb-m-2-512-gb-bez-os-bd1v3ea-144327452/?c=235235100',
        likes: 0 ,
        categoryId:2,
        isLike: false,

      },
      {
        id: 14,
        name: 'ASUS TUF A15 FA506 15.6',
        description: 'Nurai\'s Notebook',
        price: 523596,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p7c/p07/72613228.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p59/p0a/72613233.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p8a/p0d/72613241.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/asus-tuf-a15-fa506-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00je0-148010487/?c=235235100',
        likes: 0 ,
        categoryId:2,
        isLike: false,
      },
      {
  id: 16,
  name: 'iPad Pro 12.9',
  description: 'Powerful tablet with M2 chip.',
  price: 700000,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p2b/pa1/78319822.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p47/pa1/78319823.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=235235100',
  likes: 0,
  categoryId: 4,
  isLike: false,
},

{
  id: 17,
  name: 'Samsung Galaxy Tab S9',
  description: 'Great performance at affordable price.',
  price: 250000,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h22/h67/82770863489054.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=235235100',
  likes: 0,
  categoryId: 4,
  isLike: false,
},
{
  id: 18,
  name: 'Lenovo Tab P12',
  description: 'Large display for productivity and media.',
  price: 270000,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/p29/43598687.jpg?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p47/p29/43598688.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p63/p29/43598689.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pcf/p2b/43598690.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/lenovo-tb311xu-tab-4g-128g-10-1-djuim-4-gb-128-gb-seryi-140035943/?c=235235100',
  likes: 0,
  categoryId: 4,
  isLike: false,
},
{
  id: 20,
  name: 'Huawei MatePad 11',
  description: 'Smooth display and powerful battery.',
  price: 310000,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/pf2/p14/66000842.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p2a/p15/66000844.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p46/p15/66000845.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/?c=235235100',
  likes: 0,
  categoryId: 4,
  isLike: false,
},
{
  id: 21,
  name: 'Sony WH-1000XM5',
  description: 'Good good super good',
  price: 310000,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=preview-large',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/p7d/pa4/10606242.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p9a/pa4/10606243.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pb6/pa4/10606244.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/?c=235235100',
  likes: 0,
  categoryId: 3,
  isLike: false,
},
{
  id: 22,
  name: 'Sony MDR-EX15AP',
  description: 'Good good super good',
  price: 310000,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h75/63768889720862.jpg?format=gallery-medium',
  images: ['https://resources.cdn-kaspi.kz/img/m/p/h39/hf4/63768890408990.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h39/hf4/63768890408990.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h31/h0a/63768890966046.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/naushniki-sony-mdr-ex15ap-chernyi-4800725/?c=235235100',
  likes: 0,
  categoryId: 3,
  isLike: false,
},
{
        id: 23,
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Premium Android smartphone with powerful camera and S-Pen.',
        price: 580000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hfd/64403477659678.jpg?format=gallery-medium',
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h0f/hfd/64403477659678.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h48/hf2/64403480936478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h9c/h54/64403483525150.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-chernyi-106363265/?c=235235100',
        likes: 0 ,
        categoryId:1,
                isLike: false,

      },
      
    ];

    getProducts(){
      return this.products;
    }
}

