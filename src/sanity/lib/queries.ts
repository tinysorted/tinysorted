import { groq } from "next-sanity";

/* =========================================
FEATURED ARTICLE
========================================= */

export const featuredArticleQuery = groq`
*[_type == "article"]
| order(featured desc, publishedAt desc)[0]{
_id,
title,
slug,
excerpt,
publishedAt,
featured,

mainImage{
alt,
asset->
},

aestheticVideo{
asset->
},

categories[]->{
_id,
title,
slug
}
}
`;

/* =========================================
ALL ARTICLES
========================================= */

export const articlesQuery = groq`
*[_type == "article"]
| order(publishedAt desc){
_id,
title,
slug,
excerpt,
publishedAt,
featured,

mainImage{
alt,
asset->
},

categories[]->{
_id,
title,
slug
}
}
`;

/* =========================================

SINGLE ARTICLE

========================================= */

export const articleQuery = groq`
*[
  _type == "article" &&
  slug.current == $slug
][0]{
  _id,
  title,
  slug,
  excerpt,

  body[]{
    ...,

    _type == "productEmbed" => {
      _type,

      product->{
        _id,
        title,
        affiliateUrl,
        recommendation,
        price,
        brand,
        rating,
        reviewCount,

        image{
          asset->
        }
      }
    }
  },

  publishedAt,
  featured,

  mainImage{
    alt,
    asset->
  },

  aestheticVideo{
    asset->
  },

  categories[]->{
    _id,
    title,
    slug
  },

  author->{
  _id,

  name,

  slug,

  role,

  bio,

  image{
    alt,
    asset->
  },

  twitter,
  linkedin,
  website
},

  faqs{
    items[]{
      question,
      answer
    }
  },

  recommendedProducts[]->{
    _id,
    title,
    affiliateUrl,
    recommendation,
    price,
    brand,
    rating,
    reviewCount,

    image{
      asset->
    }
  }
}
`;

 


/* =========================================
ALL CATEGORIES
========================================= */

export const categoriesQuery = groq`*[_type == "category"] | order(title asc){   _id,
  title,
  slug,
  description,
  showInNavbar,
  navbarOrder
}`;

/* =========================================
   NAVBAR CATEGORIES
========================================= */

export const navbarCategoriesQuery = groq`
*[
  _type == "category" &&
  showInNavbar == true
]
| order(navbarOrder asc){
  _id,
  title,
  slug,
  navbarOrder
}
`;

/* =========================================
SINGLE CATEGORY
========================================= */

export const categoryQuery = groq`*[   _type == "category" &&
  slug.current == $slug
][0]{   _id,
  title,
  slug,
  description,
  showInNavbar,
  navbarOrder
}`;

/* =========================================
ARTICLES BY CATEGORY
========================================= */

export const articlesByCategoryQuery = groq`
*[
_type == "article" &&
$slug in categories[]->slug.current
]
| order(publishedAt desc){
_id,
title,
slug,
excerpt,
publishedAt,
featured,

mainImage{
alt,
asset->
},

categories[]->{
_id,
title,
slug
}
}
`;

/* =========================================

RELATED ARTICLES

========================================= */

export const relatedArticlesQuery = groq`
*[
  _type == "article" &&
  slug.current != $slug &&
  count(
    (categories[]->slug.current)[@ in $categories]
  ) > 0
]
| order(publishedAt desc)[0...3]{

  _id,
  title,
  slug,
  excerpt,
  publishedAt,

  mainImage{
    alt,
    asset->
  }
}
`;

/* =========================================
HOMEPAGE SECTIONS
========================================= */

export const latestArticlesQuery = groq`
*[_type == "article"]
| order(publishedAt desc)[0...6]{
_id,
title,
slug,
excerpt,
publishedAt,

mainImage{
alt,
asset->
},

categories[]->{
_id,
title,
slug
}
}
`;

export const declutteringArticlesQuery = groq`
*[
_type == "article" &&
"decluttering" in categories[]->slug.current
]
| order(publishedAt desc)[0...4]{
_id,
title,
slug,
excerpt,

mainImage{
alt,
asset->
}
}
`;

export const smallSpacesArticlesQuery = groq`
*[
_type == "article" &&
"small-spaces" in categories[]->slug.current
]
| order(publishedAt desc)[0...4]{
_id,
title,
slug,
excerpt,

mainImage{
alt,
asset->
}
}
`;

export const kitchenArticlesQuery = groq`
*[
_type == "article" &&
"kitchen" in categories[]->slug.current
]
| order(publishedAt desc)[0...4]{
_id,
title,
slug,
excerpt,

mainImage{
alt,
asset->
}
}
`;

/* =========================================
   SEARCH ARTICLES
========================================= */

export const searchArticlesQuery = groq`
*[
  _type == "article" &&
  (
    title match $search
    ||
    excerpt match $search
    ||
    $categorySlug in categories[]->slug.current
  )
]
| order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  publishedAt,

  mainImage{
    alt,
    asset->
  },

  categories[]->{
    _id,
    title,
    slug
  }
}
`;

/* =========================================
ALL AUTHORS
========================================= */

export const authorsQuery = groq`
*[_type == "author"]
| order(name asc){
  _id,

  name,
  slug,

  role,
  bio,

  image{
    alt,
    asset->
  },

  twitter,
  linkedin,
  website,

  featured
}
`;

/* =========================================
SINGLE AUTHOR
========================================= */

export const authorQuery = groq`
*[
  _type == "author" &&
  slug.current == $slug
][0]{
  _id,

  name,
  slug,
  role,
  bio,

  image{
    alt,
    asset->
  },

  twitter,
  linkedin,
  website,

  featured,

  seoTitle,
  seoDescription
}
`;

/* =========================================
ARTICLES BY AUTHOR
========================================= */

export const articlesByAuthorQuery = groq`
*[
  _type == "article" &&
  author->slug.current == $slug
]
| order(publishedAt desc){

  _id,

  title,

  slug,

  excerpt,

  publishedAt,

  featured,

  mainImage{
    alt,
    asset->
  },

  categories[]->{
    _id,
    title,
    slug
  }

}
`;

