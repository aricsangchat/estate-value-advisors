import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Cash For Jewelry St. Louis",
  description:
    "Transparent estate jewelry guidance and jewelry buying support in St. Louis for inherited jewelry, diamonds, watches, and gold.",
};

export default function CashForJewelryStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Cash For Jewelry St. Louis"
      title="Need guidance before selling jewelry for cash in St. Louis?"
      intro="Estate Value Advisors takes a calmer, more transparent approach to estate jewelry and inherited valuables. Clients deserve clear information before making emotional or financial decisions."
      primaryConcern="People searching for cash for jewelry often worry about scams, pressure, or not knowing the true value of inherited items. Honest conversations matter."
      imageAlt="Cash for jewelry guidance"
    />
  );
}
