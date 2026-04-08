export type ProductCategory = "body" | "lens";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: ProductCategory;
};

export type CartItem = Product & {
  quantity: number;
};