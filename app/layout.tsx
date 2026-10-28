import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spectra Eye Clinic & Opticals | Chaitanyapuri, Hyderabad",
  description:
    "Spectra Eye Clinic & Opticals in Chaitanyapuri, Hyderabad — professional eye care services and a curated eyewear collection under one roof. Website demo proposal.",
  keywords: [
    "eye clinic Hyderabad",
    "opticals Chaitanyapuri",
    "eyewear Hyderabad",
    "eye examination Hyderabad",
    "Spectra Eye Clinic",
  ],
  openGraph: {
    title: "Spectra Eye Clinic & Opticals | Chaitanyapuri, Hyderabad",
    description:
      "Professional eye care and a curated eyewear collection in Chaitanyapuri, Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: false, // Demo site — not for public indexing
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
