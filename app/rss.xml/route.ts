import { client } from "@/sanity/lib/client";
import { articlesQuery } from "@/sanity/lib/queries";

export async function GET() {
  const articles = await client.fetch(
    articlesQuery
  );

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>

<title>Tinysorted</title>

<link>https://tinysorted.com</link>

<description>
Sustainable small-space living,
organization inspiration,
decluttering ideas,
and thoughtful home habits.
</description>

<language>en</language>

${articles
  .map(
    (article: any) => `
<item>

<title><![CDATA[
${article.title}
]]></title>

<link>
https://tinysorted.com/article/${article.slug.current}
</link>

<guid>
https://tinysorted.com/article/${article.slug.current}
</guid>

<pubDate>
${new Date(
  article.publishedAt
).toUTCString()}
</pubDate>

<description><![CDATA[
${article.excerpt || ""}
]]></description>

</item>
`
  )
  .join("")}

</channel>
</rss>`;

  return new Response(
    rss,
    {
      headers: {
        "Content-Type":
          "application/xml",
      },
    }
  );
}