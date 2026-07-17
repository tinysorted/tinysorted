export interface Category {
  title: string;
}

export interface SanityImage {
  alt?: string;
  asset: {
    _id?: string;
    url: string;
  };
}

export interface SanityVideo {
  asset: {
    _id?: string;
    url: string;
  };
}

export interface Article {
  _id: string;

  title: string;

  excerpt: string;

  publishedAt: string;

  featured?: boolean;

  slug?: {
    current: string;
  };

  body?: unknown[];

  mainImage?: SanityImage;

  aestheticVideo?: SanityVideo;

  categories?: Category[];
}