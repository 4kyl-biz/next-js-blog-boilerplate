import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/utils/Helpers";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${getBaseUrl()}/en`,
          zh: `${getBaseUrl()}/zh`,
        },
      },
    },
    {
      url: `${getBaseUrl()}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${getBaseUrl()}/en/about`,
          zh: `${getBaseUrl()}/zh/about`,
        },
      },
    },
    {
      url: `${getBaseUrl()}/product`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${getBaseUrl()}/en/product`,
          zh: `${getBaseUrl()}/zh/product`,
        },
      },
    },
    // Add more URLs here
  ];
}
