import { localized, type LocalizedText } from "../localized";

export interface PartnersPageContent {
  heroBadge: LocalizedText;
  heroTitle: LocalizedText;
  heroDesc: LocalizedText;
  statPartners: LocalizedText;
  statProvince: LocalizedText;
  statSatisfaction: LocalizedText;
  statSupport: LocalizedText;
  sectionTitle: LocalizedText;
  sectionDesc: LocalizedText;
  voiceBadge: LocalizedText;
  voiceTitle: LocalizedText;
  voiceDesc: LocalizedText;
  benefitsTitle: LocalizedText;
  benefitsDesc: LocalizedText;
  ctaTitle: LocalizedText;
  ctaDesc: LocalizedText;
  ctaButton: LocalizedText;
}

export const DEFAULT_PARTNERS_PAGE_CONTENT: PartnersPageContent = {
  heroBadge: localized("Kemitraan Strategis", "Strategic Partnership"),
  heroTitle: localized("Lebih dari 38 Provinsi", "Our Partners Across Indonesia"),
  heroDesc: localized(
    "Dipercaya oleh Restoran Premium dan Retailer Modern",
    "Trusted by premium restaurants, five-star hotels, modern retailers, and professional distributors in more than 38 provinces.",
  ),
  statPartners: localized("Mitra Utama", "Key Partners"),
  statProvince: localized("Provinsi", "Provinces"),
  statSatisfaction: localized("Kepuasan", "Satisfaction"),
  statSupport: localized("Support", "Support"),
  sectionTitle: localized("Jaringan Mitra Terpercaya", "Trusted Partner Network"),
  sectionDesc: localized(
    "Dipercaya oleh restoran premium, hotel bintang lima, retailer modern, dan distributor profesional di lebih dari 38 provinsi.",
    "Our partners span industries from premium hospitality to modern retail, all committed to top quality.",
  ),
  voiceBadge: localized("Client Voice", "Client Voice"),
  voiceTitle: localized("Apa Kata Mitra Kami", "What Our Partners Say"),
  voiceDesc: localized(
    "Testimoni langsung dari procurement manager dan head chef yang telah bermitra dengan NMP.",
    "Direct testimonials from procurement managers and head chefs partnering with NMP.",
  ),
  benefitsTitle: localized("Mengapa Bergabung dengan NMP?", "Why Join NMP?"),
  benefitsDesc: localized(
    "Kami menawarkan lebih dari sekadar produk - kami adalah partner dalam kesuksesan Anda.",
    "We offer more than products - we are your growth partner.",
  ),
  ctaTitle: localized("Ingin Menjadi Mitra NMP?", "Interested in Partnering with NMP?"),
  ctaDesc: localized(
    "Hubungi tim partnership kami untuk diskusi peluang kolaborasi yang saling menguntungkan.",
    "Contact our partnership team to discuss mutually beneficial collaboration opportunities.",
  ),
  ctaButton: localized("Hubungi Kami via WhatsApp", "Contact Us via WhatsApp"),
};