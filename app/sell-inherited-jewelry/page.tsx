import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Inherited Jewelry Guidance",
  description:
    "Guidance for families handling inherited jewelry, estate valuables, watches, diamonds, and gold in St. Louis.",
};

export default function SellInheritedJewelryPage() {
  return (
    <CommercialLandingPage
      eyebrow="Inherited Jewelry Guidance"
      title="Inherited jewelry decisions should feel calm and informed."
      intro="Estate Value Advisors helps families understand inherited jewelry, heirlooms, watches, diamonds, and estate collections with transparency and experienced guidance."
      primaryConcern="Families often want reassurance that they are receiving fair information and enough time to understand inherited valuables before making decisions."
      imageAlt="Inherited jewelry consultation"
    />
  );
}
