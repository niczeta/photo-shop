import { ProductCard } from "../components/ProductCard";
import { bodyProducts } from "../data/products";

export const Bodies = () => {
  return (
    <section
      id="bodies"
      className="relative scroll-mt-10 px-4 py-14 sm:scroll-mt-12 sm:px-6 lg:scroll-mt-16 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
              Camera bodies
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Popular bodies
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              A curated selection of mirrorless and DSLR bodies designed for
              speed, precision, and a cleaner shooting workflow.
            </p>
          </div>

          <a
            href="#lenses"
            className="inline-flex items-center justify-center rounded-full border border-red-700/60 bg-red-700/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-100 transition hover:bg-red-700/25"
          >
            Explore lenses
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {bodyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};