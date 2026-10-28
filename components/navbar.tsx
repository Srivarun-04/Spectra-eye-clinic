"use client";

import { useState, useEffect } from "react";
import { Menu, X, Eye } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Eye Care", href: "#eye-care" },
  { label: "Eyewear", href: "#eyewear" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-midnight text-white transition-colors group-hover:bg-teal">
            <Eye className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold tracking-wide text-midnight">
              SPECTRA
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-warm-grey">
              {clinicConfig.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-midnight/70 transition-colors hover:text-midnight after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-lg bg-midnight px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-midnight-light hover:shadow-md"
          >
            Contact the Clinic
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-midnight transition-colors hover:bg-ivory lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-midnight text-white">
              <Eye className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg font-semibold tracking-wide text-midnight">
                SPECTRA
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-warm-grey">
                {clinicConfig.tagline}
              </span>
            </div>
          </a>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-midnight transition-colors hover:bg-ivory"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 px-6 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl font-medium text-midnight transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-midnight px-6 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-midnight-light"
          >
            Contact the Clinic
          </a>
        </div>
      </div>
    </header>
  );
}
