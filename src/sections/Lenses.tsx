import { ProductCard } from "../components/ProductCard";
import { lensProducts } from "../data/products";

export const Lenses = () => {
  return (
    <section
      id="lenses"
      className="relative scroll-mt-10 px-4 py-14 sm:scroll-mt-12 sm:px-6 lg:scroll-mt-16 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
              Prime & zoom lenses
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Popular lenses
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              From fast primes to workhorse zooms, built to keep up with low
              light, shallow depth, and everything in between.
            </p>
          </div>

          <a
            href="#bodies"
            className="inline-flex items-center justify-center rounded-full border border-red-700/60 bg-red-700/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-100 transition hover:bg-red-700/25"
          >
            Back to bodies
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {lensProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};