import type { APIRoute } from 'astro';
import gallery from '../data/gallery.json';
import { site } from '../data/site';

const photos = gallery as { src: string }[];

function imageTag(src: string, title: string) {
  return `<image:image><image:loc>${site.url}${src}</image:loc><image:title>${title}</image:title></image:image>`;
}

export const GET: APIRoute = () => {
  const homeImages = [
    '/images/hero.webp',
    '/images/card.webp',
    '/images/living.webp',
    '/images/bedroom.webp',
    '/images/orangery.webp',
    '/images/og.jpg',
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${site.url}/</loc>
    ${homeImages.map((src) => imageTag(src, 'Detailed Decorators project photo')).join('\n    ')}
  </url>
  <url>
    <loc>${site.url}/projects</loc>
    ${photos.map((photo, index) => imageTag(photo.src, `Decorating project photo ${index + 1} by Detailed Decorators`)).join('\n    ')}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
