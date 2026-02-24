export interface Product {
  id: number;
  name: string;
  brand?: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  monthlyPrice?: number;
  badge?: string;
  features?: string[];
  code?: string;
  imageUrl: string;
  images?: string[];
  description?: string;
}