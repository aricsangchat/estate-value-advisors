export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://estatevalueadvisors.com/#business",
        name: "Estate Value Advisors",
        url: "https://estatevalueadvisors.com/",
        telephone: "+1-314-680-3404",
        email: "info@estatevalueadvisors.com",
        priceRange: "Consultation-based",
        description:
          "Estate Value Advisors provides estate jewelry evaluations, inherited jewelry guidance, probate estate support, luxury watch guidance, gold evaluation guidance, and estate asset advisory services in St. Louis, Missouri.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7805 Olive Blvd",
          addressLocality: "St. Louis",
          addressRegion: "MO",
          postalCode: "63130",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "St. Louis" },
          { "@type": "City", name: "Clayton" },
          { "@type": "City", name: "Ladue" },
          { "@type": "City", name: "Chesterfield" },
          { "@type": "City", name: "Creve Coeur" },
          { "@type": "AdministrativeArea", name: "St. Louis County" },
        ],
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=7805+Olive+Blvd+St.+Louis+MO+63130",
        founder: {
          "@type": "Person",
          name: "Gary Bill",
          jobTitle: "Estate Jewelry and Asset Advisor",
        },
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Estate Jewelry Evaluation",
              areaServed: "St. Louis, Missouri",
              description:
                "Estate jewelry, diamond, gold, heirloom, and inherited jewelry evaluation guidance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Probate Estate Support",
              areaServed: "St. Louis, Missouri",
              description:
                "Estate asset guidance for families, executors, trustees, and attorneys handling inherited valuables.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Luxury Watch and Rolex Guidance",
              areaServed: "St. Louis, Missouri",
              description:
                "Guidance for inherited Rolex watches, luxury timepieces, and estate watch collections.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gold and Estate Asset Evaluation Guidance",
              areaServed: "St. Louis, Missouri",
              description:
                "Guidance for inherited gold, estate jewelry collections, and precious metal valuables.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://estatevalueadvisors.com/#website",
        url: "https://estatevalueadvisors.com/",
        name: "Estate Value Advisors",
        publisher: { "@id": "https://estatevalueadvisors.com/#business" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://estatevalueadvisors.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does Estate Value Advisors help with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Estate Value Advisors helps families, executors, attorneys, trustees, and private clients understand inherited jewelry, watches, gold, heirlooms, and estate valuables.",
            },
          },
          {
            "@type": "Question",
            name: "Does Estate Value Advisors serve the St. Louis area?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Estate Value Advisors serves St. Louis and nearby communities including Clayton, Ladue, Chesterfield, Creve Coeur, and St. Louis County.",
            },
          },
          {
            "@type": "Question",
            name: "Can Estate Value Advisors help with inherited Rolex watches or gold?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Estate Value Advisors provides guidance for inherited Rolex watches, luxury timepieces, gold jewelry, estate jewelry, diamonds, and related valuables.",
            },
          },
          {
            "@type": "Question",
            name: "Can Estate Value Advisors support probate or executor situations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Estate Value Advisors provides estate asset guidance for families, executors, trustees, and attorneys handling inherited valuables and estate collections.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
