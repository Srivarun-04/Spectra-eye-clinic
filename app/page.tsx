import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import EyeCare from "@/components/eye-care";
import EyewearShowcase from "@/components/eyewear-showcase";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      {/* Demo disclosure banner */}
      <div className="demo-banner" role="note" aria-label="Demo disclosure">
        Website Demo — Proposed design for Spectra Eye Clinic &amp; Opticals
      </div>

      <Navbar />

      <main id="main-content">
        <Hero />
        <EyeCare />
        <EyewearShowcase />
        <About />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
