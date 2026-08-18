/**
 * Central configuration for the CatCare landing page.
 * All environment-driven values live here — never scatter them in components.
 * This is a zero-backend validation MVP: leads are collected via Google Forms.
 *
 * Real production values are baked in below so the site works out of the box.
 * Environment variables can still override them when needed.
 */

const env = import.meta.env as Record<string, string | undefined>;

const OWNER_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfUtjDbrWbivooimln8W812FlExxibToAEHs5QlVLQ0GpqRWw/viewform?usp=header";

const SITTER_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdbM3B2YOE9qorVM2uMltCYjW7P1_gGTZi1JKgAJPz2jcY93w/viewform?usp=header";

const CATCARE_WHATSAPP_NUMBER = "201032404246";

export const siteConfig = {
  brand: "CatCare",
  tagline: "Your cat is cared for. You stay connected.",
  description:
    "Find trusted cat sitters in Egypt and stay connected with daily photos and care updates. CatCare is launching in Cairo and Giza.",
  /** e.g. 201012345678 (international format, digits only) */
  whatsappNumber: (env["VITE_WHATSAPP_NUMBER"] ?? CATCARE_WHATSAPP_NUMBER).replace(/\D/g, ""),
  gaMeasurementId: env["VITE_GA_MEASUREMENT_ID"] ?? "",
  /** Public Google Form URLs (https://docs.google.com/forms/d/e/.../viewform) */
  ownerFormUrl: env["VITE_OWNER_GOOGLE_FORM_URL"] ?? OWNER_GOOGLE_FORM_URL,
  sitterFormUrl: env["VITE_SITTER_GOOGLE_FORM_URL"] ?? SITTER_GOOGLE_FORM_URL,
  siteUrl: env["VITE_SITE_URL"] ?? "https://catcare.eg",
  currency: "EGP",
} as const;

export const isDev = Boolean(import.meta.env.DEV);

export const hasWhatsApp = () => siteConfig.whatsappNumber.length > 0;
export const hasOwnerForm = () => siteConfig.ownerFormUrl.length > 0;
export const hasSitterForm = () => siteConfig.sitterFormUrl.length > 0;

export const launchAreas = [
  "New Cairo",
  "Maadi",
  "Nasr City",
  "Heliopolis",
  "Zamalek",
  "Dokki",
  "Giza",
  "Sheikh Zayed",
  "6th of October",
  "Other",
] as const;

export const whatsappMessages = {
  owner: "Hi CatCare, I'm interested in finding a cat sitter.",
  sitter: "Hi CatCare, I'd like to become a cat sitter.",
} as const;

export const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Cat Owners", href: "#for-owners" },
  { label: "For Sitters", href: "#for-sitters" },
  { label: "Safety", href: "#safety" },
  { label: "FAQ", href: "#faq" },
] as const;
