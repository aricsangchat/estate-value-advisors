import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Diamond Buyer St. Louis",
  description:
    "Diamond and estate jewelry guidance in St. Louis for inherited diamonds, engagement rings, and estate collections.",
};

export default function DiamondBuyerStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Diamond Buyer St. Louis"
      title="Inherited diamonds and estate jewelry deserve careful evaluation."
      intro="Estate Value Advisors helps clients understand diamonds, engagement rings, estate jewelry, and inherited collections with transparency and professional guidance."
      primaryConcern="Many clients are unsure how diamond quality, certifications, settings, or estate history affect value and want reassurance before making decisions."
      imageAlt="Diamond jewelry guidance"
      imageSrc="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop"
    />
  );
}
