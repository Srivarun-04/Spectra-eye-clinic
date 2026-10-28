/**
 * Clinic Configuration
 * 
 * This is the central configuration file for all clinic details.
 * Update this file with verified information before publishing.
 * 
 * IMPORTANT: Only include information that has been confirmed by the clinic owner.
 * Placeholder values are clearly marked and should be replaced or removed.
 */

export interface ClinicConfig {
  name: string;
  tagline: string;
  location: {
    area: string;
    city: string;
    state: string;
    country: string;
    fullAddress: string;
    /** Google Maps search URL — uses a general area search until exact coordinates are confirmed */
    mapsUrl: string;
  };
  contact: {
    /** Set to a verified phone number, or null to hide the phone CTA */
    phone: string | null;
    /** Set to a verified WhatsApp number, or null to hide the WhatsApp CTA */
    whatsapp: string | null;
    /** Set to a verified email address, or null to hide the email CTA */
    email: string | null;
  };
  hours: {
    /** Set to true only when opening hours have been confirmed by the owner */
    confirmed: boolean;
    /** Opening hours text — only displayed when confirmed is true */
    schedule: string[];
  };
  social: {
    instagram: string | null;
    facebook: string | null;
  };
}

export const clinicConfig: ClinicConfig = {
  name: "Spectra Eye Clinic & Opticals",
  tagline: "Eye Care & Eyewear",
  location: {
    area: "Chaitanyapuri",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    fullAddress: "Chaitanyapuri, Hyderabad, Telangana, India",
    mapsUrl:
      "https://www.google.com/maps/search/Spectra+Eye+Clinic+Opticals+Chaitanyapuri+Hyderabad",
  },
  contact: {
    // Replace with verified contact details
    phone: null,
    whatsapp: null,
    email: null,
  },
  hours: {
    confirmed: false,
    schedule: [
      "Monday – Saturday: 10:00 AM – 8:00 PM",
      "Sunday: Closed",
    ],
  },
  social: {
    instagram: null,
    facebook: null,
  },
};
