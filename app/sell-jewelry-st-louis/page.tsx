import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Sell Jewelry St. Louis",
  description:
    "Trusted guidance for selling jewelry in St. Louis. Estate Value Advisors helps clients understand inherited jewelry, diamonds, gold, watches, and estate collections fairly.",
};

export default function SellJewelryStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Sell Jewelry St. Louis"
      title="Looking for a trusted place to sell jewelry in St. Louis?"
      intro="Estate Value Advisors helps clients understand jewelry value with transparency, fairness, and experienced estate guidance instead of pressure-driven conversations."
      primaryConcern="Many people worry about getting an unfair price or not fully understanding what they have. The first step should always be clarity and honest guidance."
      imageAlt="Sell jewelry in St Louis"
    />
  );
}
