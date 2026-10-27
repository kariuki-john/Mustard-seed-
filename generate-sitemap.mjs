
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";

const hostname = "https://www.mustardseedschools.com";

// Update these paths to match your actual React Router routes.
const routes = [
  "/",
  "/our-school",
  "/early-years",
  "/junior-school",
  "/senior-school",
  "/admissions/application",
  "/our-school/transport",
  "/policies",
  "/contact-us",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  const output = createWriteStream("public/sitemap.xml");

  const sitemapPromise = streamToPromise(sitemap);

  sitemap.pipe(output);

  for (const route of routes) {
    sitemap.write({ url: route });
  }

  sitemap.end();

  await sitemapPromise;

  console.log("Sitemap generated successfully!");
}

generateSitemap().catch(console.error);
