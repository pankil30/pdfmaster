import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
    },
    {
      url: "https://yourdomain.com/tools",
      lastModified: new Date(),
    },
    {
      url: "https://yourdomain.com/merge-pdf",
      lastModified: new Date(),
    },
    {
      url: "https://yourdomain.com/split-pdf",
      lastModified: new Date(),
    },
  ];
}