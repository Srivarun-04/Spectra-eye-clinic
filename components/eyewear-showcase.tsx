import Image from "next/image";

interface EyewearItem {
  src: string;
  alt: string;
  label: string;
  sublabel: string;
}

const featured: EyewearItem = {
  src: "/images/eyewear-frames.jpg",
  alt: "Contemporary optical eyeglass frames on display",
  label: "Optical Frames",
  sublabel: "Modern designs for every face shape and prescription",
};

const secondaryItems: EyewearItem[] = [
  {
    src: "/images/everyday-glasses.jpg",
    alt: "Everyday eyeglasses in classic and modern styles",
    label: "Everyday Essentials",
    sublabel: "Comfortable, all-day wear",
  },
  {
    src: "/images/sunglasses-display.jpg",
    alt: "Stylish sunglasses collection displayed elegantly",
    label: "Sunglasses",
    sublabel: "Protection meets personal style",
  },
];

const accentItem: EyewearItem = {
  src: "/images/eye-exam-detail.jpg",
  alt: "Close-up detail of premium eyewear lens craftsmanship",
  label: "Lens Options",
  sublabel: "Clarity for every lifestyle and need",
};

export default function EyewearShowcase() {
  return (
    <section id="eyewear" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-wider text-teal">
              Eyewear Collection
            </span>
            <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-midnight sm:text-5xl">
              Find Your Everyday Frame
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-warm-grey">
              Explore a curated selection of frames — from timeless silhouettes
              to contemporary designs. Visit the store to find the perfect pair.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-lg border border-midnight/15 bg-white px-6 py-3 text-sm font-medium text-midnight transition-all duration-200 hover:border-midnight/30 hover:shadow-md"
          >
            Visit the Store →
          </a>
        </div>

        {/* Editorial grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Featured large card */}
          <div className="group cursor-default lg:col-span-5 lg:row-span-2">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl bg-white lg:min-h-[600px]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-midnight/10 to-transparent" />

              {/* Category pill */}
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-midnight backdrop-blur-sm">
                {featured.label}
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {featured.label}
                </h3>
                <p className="mt-1.5 text-sm text-white/70">{featured.sublabel}</p>
              </div>
            </div>
          </div>

          {/* Two secondary cards stacked */}
          {secondaryItems.map((item) => (
            <div key={item.label} className="group cursor-default lg:col-span-4">
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={375}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-midnight backdrop-blur-sm">
                  {item.label}
                </div>
              </div>
              <div className="mt-4 px-1">
                <h3 className="font-heading text-lg font-semibold text-midnight">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-warm-grey">{item.sublabel}</p>
              </div>
            </div>
          ))}

          {/* Accent card — wide bottom-right */}
          <div className="group cursor-default lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <div className="aspect-[21/9] overflow-hidden">
                <Image
                  src={accentItem.src}
                  alt={accentItem.alt}
                  width={900}
                  height={385}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-midnight backdrop-blur-sm">
                {accentItem.label}
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-heading text-base font-semibold text-white">
                  {accentItem.sublabel}
                </p>
              </div>
            </div>
            <div className="mt-4 px-1">
              <h3 className="font-heading text-lg font-semibold text-midnight">
                {accentItem.label}
              </h3>
              <p className="mt-1 text-sm text-warm-grey">{accentItem.sublabel}</p>
            </div>
          </div>
        </div>

        {/* Disclaimer note */}
        <p className="mt-12 text-center text-xs text-warm-grey/60">
          Images are for visual demonstration only. Visit the clinic to explore
          available frames and styles in person.
        </p>
      </div>
    </section>
  );
}
