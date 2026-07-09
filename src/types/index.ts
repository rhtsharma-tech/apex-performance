export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  subcategory: string;
  price: number;
  originalPrice?: number;
  sku: string;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  images: string[];
  thumbnail: string;
  badge?: "New Arrival" | "Sale" | "Best Seller" | "Limited";
  badgeColor?: "yellow" | "red";
  specs: Spec[];
  metrics?: Metric[];
  chips: string[];
  fitment: string[];
  serialNumber: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  productCount: number;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Metric {
  label: string;
  value: number;
  unit: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  brands: string[];
  priceRange: [number, number];
  systems: string[];
  search: string;
}
