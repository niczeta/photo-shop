import type { Product } from "../types/cart";

export const products: Product[] = [
  { id: "body-r6", title: "Canon EOS R6", price: 2499, image: "/camera.png", category: "body" },
  { id: "body-r5", title: "Canon EOS R5", price: 3899, image: "/camera.png", category: "body" },
  { id: "body-r8", title: "Canon EOS R8", price: 1699, image: "/camera.png", category: "body" },
  { id: "body-rp", title: "Canon EOS RP", price: 999, image: "/camera.png", category: "body" },
  { id: "body-90d", title: "Canon EOS 90D", price: 1299, image: "/camera.png", category: "body" },
  { id: "body-r7", title: "Canon EOS R7", price: 1499, image: "/camera.png", category: "body" },
  { id: "body-r10", title: "Canon EOS R10", price: 979, image: "/camera.png", category: "body" },
  { id: "body-250d", title: "Canon EOS 250D", price: 749, image: "/camera.png", category: "body" },

  { id: "lens-rf50", title: "Canon RF 50mm f/1.2L", price: 2299, image: "/lens.png", category: "lens" },
  { id: "lens-rf2470", title: "Canon RF 24-70mm f/2.8L", price: 2399, image: "/lens.png", category: "lens" },
  { id: "lens-rf85", title: "Canon RF 85mm f/1.8", price: 799, image: "/lens.png", category: "lens" },
  { id: "lens-rf35", title: "Canon RF 35mm f/1.8", price: 549, image: "/lens.png", category: "lens" },
  { id: "lens-rf70200", title: "Canon RF 70-200mm f/2.8L", price: 2799, image: "/lens.png", category: "lens" },
  { id: "lens-rf16", title: "Canon RF 16mm f/2.8", price: 299, image: "/lens.png", category: "lens" },
  { id: "lens-rf24105", title: "Canon RF 24-105mm f/4L", price: 1299, image: "/lens.png", category: "lens" },
  { id: "lens-rf100", title: "Canon RF 100mm f/2.8L Macro", price: 1499, image: "/lens.png", category: "lens" },
];

export const bodyProducts = products.filter((product) => product.category === "body");
export const lensProducts = products.filter((product) => product.category === "lens");