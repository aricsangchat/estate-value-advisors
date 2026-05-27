import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://estatevalueadvisors.com";

  const pages = [
    "",
    "/about-gary-bill",
    "/contact",
    "/estate-jewelry-evaluations",
    "/estate-jewelry-st-louis",
    "/probate-estate-support",
    "/inherited-jewelry",
    "/jewelry-appraisal-st-louis",
    "/sell-estate-jewelry-st-louis",
    "/sell-jewelry-st-louis",
    "/sell-gold-st-louis",
    "/cash-for-jewelry-st-louis",
    "/sell-rolex-st-louis",
    "/diamond-buyer-st-louis",
    "/estate-gold-buyer-st-louis",
    "/antique-jewelry-buyer-st-louis",
    "/sell-inherited-jewelry",
    "/where-to-sell-estate-jewelry",
    "/best-place-to-sell-rolex-st-louis",
    "/rolex-buyer-st-louis",
    "/gold-buyer-st-louis",
    "/estate-jewelry-clayton",
    "/estate-jewelry-ladue",
    "/estate-jewelry-chesterfield",
    "/inherited-rolex",
    "/what-to-do-with-inherited-jewelry",
    "/blog",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
