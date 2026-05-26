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
