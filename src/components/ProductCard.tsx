// src/components/ProductCard.tsx
import { Button } from "./Button";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/cart";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_10px_35px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-red-700/40 hover:bg-white/[0.05]">
      <div className="overflow-hidden rounded-[22px] bg-gradient-to-b from-white/8 to-white/[0.02]">
        <img
          src={product.image}
          alt={product.title}
          className="h-[260px] w-full object-contain p-8 transition duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="px-2 pb-2 pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-red-400">
          {product.category === "body" ? "Camera body" : "Lens"}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
          {product.title}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-lg font-medium text-white/90">
            ${product.price.toLocaleString()}
          </p>

          <Button
            text={isInCart(product.id) ? "Add again" : "Add to cart"}
            variant="primary"
            className="px-4 py-2 text-xs"
            onClick={() => addToCart(product)}
          />
        </div>
      </div>
    </div>
  );
};