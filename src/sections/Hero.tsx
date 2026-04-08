import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-3 pb-10 pt-24 sm:px-5 lg:px-6 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.14),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 via-black/18 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/72 via-black/10 to-black/8" />

          <video
            className="h-[78vh] min-h-[560px] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/canon-video.mp4" type="video/mp4" />
            Your browser does not support the video.
          </video>

          <div className="absolute inset-0 z-20 flex items-end">
            <div className="w-full p-6 sm:p-8 lg:p-12 xl:p-16">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
                  Premium camera gear
                </p>

                <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Not the legit Canon website, just a much cooler one.
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
                  Explore bodies, lenses, and accessories through a darker,
                  cleaner storefront built for people who care about image,
                  texture, and detail.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#bodies">
                    <Button
                      text="Shop bodies"
                      variant="secondary"
                      className="px-6 py-3 text-xs sm:text-sm"
                    />
                  </a>

                  <a href="#lenses">
                    <Button
                      text="Explore lenses"
                      variant="secondary"
                      className="px-6 py-3 text-xs sm:text-sm"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-5 top-5 z-20 hidden rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md md:block">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
              Canon visual story
            </span>
          </div>

          <div className="absolute bottom-5 right-5 z-20 hidden items-center gap-2 rounded-full border border-red-900/40 bg-red-900/20 px-4 py-2 backdrop-blur-md md:flex">
            <span className="inline-block size-2 rounded-full bg-red-500" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-red-100">
              Motion-first hero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};