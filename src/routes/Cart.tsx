import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { CartItem } from "../components/CartItem";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { items, cartCount, cartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState<"" | "success" | "error">("");

  const hasItems = items.length > 0;

  const vat = useMemo(() => Number((cartTotal * 0.22).toFixed(2)), [cartTotal]);
  const finalTotal = useMemo(() => cartTotal + vat, [cartTotal, vat]);

  const handleFakeCheckout = () => {
    if (!hasItems || isCheckingOut) return;

    setIsCheckingOut(true);
    setCheckoutMessage("");

    window.setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutMessage("success");
      clearCart();
    }, 1400);
  };

  return (
    <section className="px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
              Cart
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your selected gear
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Manage your camera bodies and lenses, keep your picks safe across
              refreshes, and simulate a quick checkout flow directly in the
              browser.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-red-700/50 hover:bg-red-700/10"
          >
            Continue shopping
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-4">
            {hasItems ? (
              items.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-400">
                  Empty cart
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-white">
                  Nothing here yet
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/60">
                  Add a few bodies or lenses from the homepage and they will stay
                  here even after a page refresh.
                </p>

                <div className="mt-6">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-full border border-red-700/60 bg-red-700/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-100 transition hover:bg-red-700/25"
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            )}
          </div>

          <aside
            className={`h-fit rounded-[32px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.24)] ${
              !hasItems ? "opacity-70" : ""
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-400">
              Summary
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Cart totals
            </h2>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-center justify-between text-white/70">
                <span>Items</span>
                <span>{cartCount}</span>
              </div>

              <div className="flex items-center justify-between text-white/70">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-white/70">
                <span>VAT</span>
                <span>${vat.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-base font-semibold text-white">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button
                text={isCheckingOut ? "Processing..." : "Fake checkout"}
                onClick={handleFakeCheckout}
                disabled={!hasItems || isCheckingOut}
                variant="primary"
                className="w-full"
              />

              <Button
                text="Clear cart"
                onClick={clearCart}
                disabled={!hasItems || isCheckingOut}
                variant="secondary"
                className="w-full"
              />
            </div>

            {checkoutMessage === "success" && (
              <p className="mt-5 text-sm text-emerald-300">
                Fake checkout completed successfully. Your cart has been cleared.
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};