import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Antique Jewelry Buyer St. Louis",
  description:
    "Antique jewelry and estate jewelry guidance in St. Louis for inherited collections, heirlooms, diamonds, gold, and vintage pieces.",
};

export default function AntiqueJewelryBuyerStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Antique Jewelry Buyer St. Louis"
      title="Antique and estate jewelry should be reviewed with care."
      intro="Estate Value Advisors helps clients understand antique jewelry, vintage pieces, heirlooms, diamonds, gold, and family collections with calm, transparent guidance."
      primaryConcern="Many older pieces carry design, maker, gemstone, sentimental, or estate value that can be overlooked when a buyer only focuses on metal weight."
      imageAlt="Antique jewelry buyer St Louis"
    />
  );
}
