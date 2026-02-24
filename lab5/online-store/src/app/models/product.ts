export interface Product {
  id: number;
  name: string;
  brand?: string;
  categoryId: number; // связь с категорией
  description: string;
  price: number;
  rating: number;
  reviews: number;
  likes: number; // новое поле для лайков
  imageUrl: string;
  images?: string[];
  kaspiLink: string; // ссылка на kaspi.kz
}