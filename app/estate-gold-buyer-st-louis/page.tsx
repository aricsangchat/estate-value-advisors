import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Estate Gold Buyer St. Louis",
  description:
    "Estate gold and inherited jewelry guidance in St. Louis for families handling estate collections and precious metal valuables.",
};

export default function EstateGoldBuyerStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Estate Gold Buyer St. Louis"
      title="Estate gold collections often deserve more than a simple weight quote."
      intro="Estate Value Advisors helps families understand inherited gold jewelry, estate valuables, and collection value with transparency and experienced guidance."
      primaryConcern="Estate collections can contain antique pieces, diamonds, designer jewelry, and heirlooms where value extends beyond gold weight alone."
      imageAlt="Estate gold jewelry"
    />
  );
}
