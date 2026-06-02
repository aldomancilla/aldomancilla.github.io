import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Portfolio | Aldo Mancilla | aldomancilla.dev',
    description: 'Welcome to my Portfolio, where I share my passion for web development.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}