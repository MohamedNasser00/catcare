/**
 * Central configuration for the CatCare landing page.
 * This is a zero-backend validation MVP: leads are collected via Google Forms.
 * All values are hardcoded below so no environment variables are required.
 */

const OWNER_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfUtjDbrWbivooimln8W812FlExxibToAEHs5QlVLQ0GpqRWw/viewform";

const SITTER_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdbM3B2YOE9qorVM2uMltCYjW7P1_gGTZi1JKgAJPz2jcY93w/viewform";

const CATCARE_WHATSAPP_NUMBER = "201032404246";

export const siteConfig = {
  brand: "CatCare",
  tagline: "Your cat is cared for. You stay connected.",
  description:
    "Find trusted cat sitters in Egypt and stay connected with daily photos and care updates. CatCare is launching in Cairo and Giza.",
  /** e.g. 201012345678 (international format, digits only) */
  whatsappNumber: CATCARE_WHATSAPP_NUMBER.replace(/\D/g, ""),
  gaMeasurementId: "",
  /** Public Google Form URLs (https://docs.google.com/forms/d/e/.../viewform) */
  ownerFormUrl: OWNER_GOOGLE_FORM_URL,
  sitterFormUrl: SITTER_GOOGLE_FORM_URL,
  siteUrl: "https://catcare-egypt.vercel.app",
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
