import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-ivory pt-20"
    >
      {/* Subtle background texture/grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #132238 0px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #132238 0px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center py-16 lg:py-24">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-warm-grey">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Chaitanyapuri, Hyderabad
            </span>

            <h1 className="font-heading text-5xl font-semibold leading-[1.08] tracking-tight text-midnight sm:text-6xl lg:text-7xl">
              See Clearly.
              <br />
              <span className="italic text-teal">Look Remarkable.</span>
            </h1>

            <p className="mt-7 max-w-[480px] text-lg leading-relaxed text-warm-grey">
              Thoughtful eye care and eyewear for everyday life. Explore vision
              services and discover frames that suit your style.
            </p>

            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-midnight px-7 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-midnight-light hover:shadow-lg hover:shadow-midnight/15"
              >
                Contact the Clinic
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#eyewear"
                id="hero-cta-eyewear"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-7 py-3.5 text-base font-medium text-midnight transition-all duration-200 hover:border-midnight/20 hover:bg-ivory hover:shadow-sm"
              >
                Explore Eyewear
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-xs text-warm-grey/50">
              Eye care &amp; optical services · Chaitanyapuri, Hyderabad
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative blurs */}
              <div aria-hidden="true" className="absolute -right-8 -top-8 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-midnight/5 blur-2xl" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-midnight/12">
                <Image
                  src="/images/hero-eyewear.jpg"
                  alt="Premium eyewear collection displayed on a modern stand, representing the eyewear available at Spectra Eye Clinic & Opticals"
                  width={640}
                  height={800}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                />
              </div>

              {/* Floating location card */}
              <div className="absolute -left-5 bottom-12 max-w-[200px] rounded-xl border border-border bg-white/95 px-5 py-4 shadow-xl shadow-midnight/8 backdrop-blur-sm sm:-left-10">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-teal">
                  Eye Care &amp; Optical
                </p>
                <p className="mt-1.5 font-heading text-sm font-semibold leading-snug text-midnight">
                  Chaitanyapuri,
                  <br />Hyderabad
                </p>
              </div>

              {/* Floating accent dot pattern */}
              <div
                aria-hidden="true"
                className="absolute -right-4 top-8 grid grid-cols-5 gap-2 opacity-30"
              >
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-midnight"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#eye-care"
          className="flex flex-col items-center gap-1.5 text-warm-grey/40 transition-colors hover:text-teal"
          aria-label="Scroll down to eye care section"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
