import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Where To Sell Estate Jewelry",
  description:
    "Guidance for families wondering where to sell estate jewelry, inherited watches, gold, diamonds, and heirlooms in St. Louis.",
};

export default function WhereToSellEstateJewelryPage() {
  return (
    <CommercialLandingPage
      eyebrow="Where To Sell Estate Jewelry"
      title="Where should you sell estate jewelry in St. Louis?"
      intro="Families often want a trustworthy place to start when handling inherited jewelry and estate valuables. Estate Value Advisors focuses on transparency, fairness, and helping clients understand their options clearly."
      primaryConcern="The biggest concern for many families is not knowing who they can trust or whether they are receiving fair information about inherited valuables."
      imageAlt="Estate jewelry consultation"
    />
  );
}
