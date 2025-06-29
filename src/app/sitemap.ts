import type { MetadataRoute, Route } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brfkastanjen4.se";

  const routes = [
    {
      path: "/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      path: "/lokaler-forrad",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/styrelsen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/info-om-foreningen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/maklarinfo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ] satisfies Array<
    Omit<MetadataRoute.Sitemap[number], "url"> & { path: Route }
  >;

  return routes.map(({ path, ...rest }) => ({
    url: `${baseUrl}/${path}`,
    ...rest,
  }));
}
