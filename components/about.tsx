import Image from "next/image";
import { Heart, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/about-clinic.jpg"
                alt="Warm, inviting interior of an eye clinic and optical store"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-teal/15" />
          </div>

          {/* Text side */}
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-teal">
              About Us
            </span>
            <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-midnight sm:text-5xl">
              Eye Care, With a
              <br />
              Personal Touch.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-warm-grey">
              Spectra Eye Clinic &amp; Opticals brings together professional eye
              care services and a carefully curated eyewear collection under one
              roof. Located in Chaitanyapuri, Hyderabad, we aim to make quality
              vision care accessible and the experience of choosing eyewear
              genuinely enjoyable.
            </p>
            <p className="mt-4 text-base leading-relaxed text-warm-grey">
              Whether you&apos;re visiting for a routine eye check or looking
              for frames that reflect your personal style, you&apos;ll find a
              welcoming space with attentive, unhurried service.
            </p>

            {/* Values */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Heart className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-midnight">
                  Personal Care
                </h3>
                <p className="text-sm leading-relaxed text-warm-grey">
                  Attentive service that treats each visitor as an individual.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-midnight">
                  Trusted Service
                </h3>
                <p className="text-sm leading-relaxed text-warm-grey">
                  Professional eye care you can rely on for your family.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Users className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-midnight">
                  Community Focus
                </h3>
                <p className="text-sm leading-relaxed text-warm-grey">
                  Proudly serving the Chaitanyapuri neighborhood and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
