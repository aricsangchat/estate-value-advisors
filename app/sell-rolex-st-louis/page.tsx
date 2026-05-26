import type { Metadata } from "next";
import { CommercialLandingPage } from "../components/commercial-landing-page";

export const metadata: Metadata = {
  title: "Sell Rolex St. Louis",
  description:
    "Trusted guidance for selling Rolex watches and luxury timepieces in St. Louis.",
};

export default function SellRolexStLouisPage() {
  return (
    <CommercialLandingPage
      eyebrow="Sell Rolex St. Louis"
      title="Selling a Rolex should start with understanding what you have."
      intro="Estate Value Advisors helps clients navigate inherited Rolex watches and luxury timepieces with experienced, transparent guidance instead of rushed negotiations."
      primaryConcern="Many people inherit Rolex watches without knowing the model demand, market value, or condition factors that can significantly affect pricing."
      imageAlt="Sell Rolex watch"
      imageSrc="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1400&auto=format&fit=crop"
    />
  );
}
