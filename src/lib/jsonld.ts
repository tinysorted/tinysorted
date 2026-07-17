const siteUrl =
process.env.NEXT_PUBLIC_SITE_URL ||
"https://tinysorted.com";

export function websiteJsonLd() {
return {
"@context":
"https://schema.org",


"@type":
  "WebSite",

name: "Tinysorted",

url: siteUrl,

description:
  "Small space living, decluttering, organization and minimalist home inspiration.",

potentialAction: {
  "@type":
    "SearchAction",

  target:
    `${siteUrl}/search?q={search_term_string}`,

  "query-input":
    "required name=search_term_string",
},


};
}

export function organizationJsonLd() {
return {
"@context":
"https://schema.org",


"@type":
  "Organization",

name: "Tinysorted",

url: siteUrl,

logo:
  `${siteUrl}/logo.png`,


};
}

export function articleJsonLd(
article: any
) {
return {
"@context":
"https://schema.org",


"@type":
  "Article",

headline:
  article.title,

description:
  article.excerpt,

datePublished:
  article.publishedAt,

dateModified:
  article.publishedAt,

mainEntityOfPage: {
  "@type":
    "WebPage",

  "@id":
    `${siteUrl}/article/${article.slug.current}`,
},

publisher: {
  "@type":
    "Organization",

  name: "Tinysorted",
},


};
}
