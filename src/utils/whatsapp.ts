import { siteConfig, whatsappMessages } from "@/config/site";

export function buildWhatsAppUrl(message: string): string {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const ownerWhatsAppUrl = () => buildWhatsAppUrl(whatsappMessages.owner);
export const sitterWhatsAppUrl = () => buildWhatsAppUrl(whatsappMessages.sitter);
