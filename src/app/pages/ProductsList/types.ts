export interface ProductsListState {
  isCallingAPI: boolean;
  products: MakeupProduct[];
  pagination: Pagination;
  filters: {
    productTags: string[];
  };
}

export interface MakeupProduct {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_colors: Color[];
  product_link: string;
  product_type: string;
  rating: number | null;
  tag_list: string[];
  updated_at: string;
  website_link: string;
}

export interface Color {
  hex_value: string;
  color_name: string;
}

export interface Pagination {
  page: number;
  elementsPerPage: number;
  numberOfPossibleResults: number;
}
