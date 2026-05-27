import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Best Place To Sell Rolex St. Louis",
  description:
    "Trusted Rolex and luxury watch guidance in St. Louis with transparent estate evaluation support.",
};

export default function BestPlaceToSellRolexStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Best Place To Sell Rolex St. Louis"
      title="The best Rolex conversations begin with trust and transparency."
      intro="Estate Value Advisors helps clients understand inherited Rolex watches and luxury timepieces with experienced guidance and a calmer approach to estate valuables."
      primaryConcern="Many clients searching for the best place to sell a Rolex want reassurance that they are speaking with someone experienced, fair, and transparent."
      imageAlt="Luxury Rolex watch"
      imageSrc="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1400&auto=format&fit=crop"
    />
  );
}
