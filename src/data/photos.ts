export const photos = {
  hero: {
    src: '/images/hero.webp',
    srcSet: '/images/hero-960.webp 960w, /images/hero.webp 2000w',
    w: 2000,
    h: 1500,
    alt: 'Sage green bay window with white woodwork, painted by Detailed Decorators',
  },
  card: {
    src: '/images/card.webp',
    w: 1600,
    h: 1200,
    alt: 'Hall and stairs with a grey carpet runner, herringbone floor and white woodwork',
  },
  living: {
    src: '/images/living.webp',
    w: 1600,
    h: 1200,
    alt: 'Living room with painted alcove shelves, a tiled fireplace and green curtains',
  },
  bedroom: {
    src: '/images/bedroom.webp',
    w: 1600,
    h: 1064,
    alt: 'Bedroom with white shutters, calm painted walls and a fitted cabin bed',
  },
  orangery: {
    src: '/images/orangery.webp',
    w: 1600,
    h: 1200,
    alt: 'White painted garden room on a red brick house',
  },
} as const;

export type PhotoKey = keyof typeof photos;
