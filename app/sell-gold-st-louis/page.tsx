import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Sell Gold St. Louis",
  description:
    "Fair and transparent guidance for selling gold jewelry and inherited gold in St. Louis.",
};

export default function SellGoldStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Sell Gold St. Louis"
      title="Selling gold jewelry in St. Louis should feel straightforward and fair."
      intro="Estate Value Advisors helps families and individuals better understand inherited gold jewelry, estate collections, and precious metal valuables before making decisions."
      primaryConcern="Clients often worry about being rushed into selling gold based only on weight while overlooking designer pieces, diamonds, antique value, or estate significance."
      imageAlt="Sell gold jewelry"
    />
  );
}
