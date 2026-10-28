import { MapPin, Phone, Mail, Navigation, MessageCircle } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export default function Contact() {
  const { location, contact } = clinicConfig;

  return (
    <section id="contact" className="bg-midnight py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left side — text & contact info */}
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-teal-light">
              Get in Touch
            </span>
            <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Visit Us in
              <br />
              {location.area}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
              We&apos;d love to help you with your eye care needs. Stop by the
              clinic, explore our eyewear collection, or reach out to schedule a
              visit.
            </p>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-5">
              {/* Location — always shown */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {location.fullAddress}
                  </p>
                </div>
              </div>

              {/* Phone — shown only when verified */}
              {contact.phone && (
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="mt-1 text-sm text-white/60 transition-colors hover:text-teal-light"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Email — shown only when verified */}
              {contact.email && (
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 text-sm text-white/60 transition-colors hover:text-teal-light"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-lg"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>

              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              )}

              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          {/* Right side — map embed area */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder using Google Maps embed */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title={`Map showing ${clinicConfig.name} in ${location.area}`}
                src={`https://www.google.com/maps?q=Spectra+Eye+Clinic+Opticals+Chaitanyapuri+Hyderabad&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />
            </div>

            {/* Opening hours — only if confirmed */}
            {clinicConfig.hours.confirmed && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  Opening Hours
                </h3>
                <div className="mt-4 flex flex-col gap-2">
                  {clinicConfig.hours.schedule.map((line) => (
                    <p key={line} className="text-sm text-white/60">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Note when hours are not confirmed */}
            {!clinicConfig.hours.confirmed && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  Opening Hours
                </h3>
                <p className="mt-3 text-sm text-white/50">
                  Please contact the clinic directly for current opening hours
                  and availability.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
