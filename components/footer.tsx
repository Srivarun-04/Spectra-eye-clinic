import { Eye, MapPin } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Eye Care", href: "#eye-care" },
  { label: "Eyewear", href: "#eyewear" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { name, tagline, location, contact, social } = clinicConfig;

  return (
    <footer className="bg-midnight">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="group inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/20 text-teal-light transition-colors group-hover:bg-teal group-hover:text-white">
                <Eye className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-semibold tracking-wide text-white">
                  SPECTRA
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-teal-light">
                  {tagline}
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              Professional eye care and a curated eyewear collection, right here
              in Chaitanyapuri, Hyderabad.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 shrink-0 text-teal-light" strokeWidth={1.5} />
              <span>{location.fullAddress}</span>
            </div>

            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="mt-2 inline-block text-sm text-white/50 transition-colors hover:text-teal-light"
              >
                {contact.phone}
              </a>
            )}

            {/* Social links */}
            {(social.instagram || social.facebook) && (
              <div className="mt-6 flex items-center gap-3">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-teal/40 hover:text-teal-light"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                )}
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-teal/40 hover:text-teal-light"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30">
              Navigate
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Visit */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30">
              Visit Us
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Get Directions →
              </a>
              <a
                href="#contact"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Contact the Clinic →
              </a>
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-white/30">
            © 2026 {name}. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Website demo — proposed design, not an official publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
