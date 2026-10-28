import { Eye, ScanEye, Glasses, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Eye,
    title: "Eye Examination",
    description:
      "A thorough eye health check to understand your current vision and identify any areas that may need attention.",
  },
  {
    icon: ScanEye,
    title: "Vision Assessment",
    description:
      "Detailed evaluation of your visual needs, helping to determine the right prescription for clear, comfortable sight.",
  },
  {
    icon: Glasses,
    title: "Prescription Eyewear",
    description:
      "Guidance on choosing lenses and frames tailored to your prescription, lifestyle, and personal style.",
  },
  {
    icon: MessageCircle,
    title: "Optical Consultation",
    description:
      "A conversation about your eye care needs, answering questions and exploring options that suit you best.",
  },
];

export default function EyeCare() {
  return (
    <section id="eye-care" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-teal">
            Our Services
          </span>
          <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-midnight sm:text-5xl">
            Care for Your Vision
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-warm-grey">
            Your eyes are essential to how you experience the world. We provide
            attentive, professional eye care services to help you see your best
            and keep your vision healthy.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-border bg-ivory/50 p-8 transition-all duration-300 hover:border-teal/30 hover:bg-ivory hover:shadow-lg hover:shadow-teal/5 lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold text-midnight">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-warm-grey">
                  {service.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute right-6 top-6 h-8 w-8 rounded-full border border-border/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Proposed services note */}
        <p className="mt-10 text-center text-xs text-warm-grey/60">
          Services shown are proposed categories for this demo and may be
          adjusted to reflect the clinic&apos;s confirmed offerings.
        </p>
      </div>
    </section>
  );
}
