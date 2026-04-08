import { useCart } from "../context/CartContext";
import type { CartItem as CartItemType } from "../types/cart";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <article className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center">
      <div className="flex h-28 w-full items-center justify-center rounded-[22px] bg-gradient-to-b from-white/8 to-white/[0.02] sm:w-32">
        <img
          src={item.image}
          alt={item.title}
          className="h-24 w-full object-contain p-4"
        />
      </div>

      <div className="flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-red-400">
          {item.category === "body" ? "Camera body" : "Lens"}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-sm text-white/60">
          ${item.price.toLocaleString()} each
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2">
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-red-700/20"
          >
            -
          </button>

          <span className="min-w-8 text-center text-sm font-semibold text-white">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-red-700/20"
          >
            +
          </button>
        </div>

        <p className="text-sm font-semibold text-white">
          ${(item.price * item.quantity).toLocaleString()}
        </p>

        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55 transition hover:text-red-400"
        >
          Remove
        </button>
      </div>
    </article>
  );
};