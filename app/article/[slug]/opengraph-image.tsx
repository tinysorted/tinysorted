import { ImageResponse } from "next/og";

import { client } from "@/sanity/lib/client";
import { articleQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const size = {
width: 1200,
height: 630,
};

export const contentType = "image/png";

export default async function Image({
params,
}: {
params: Promise<{
slug: string;
}>;
}) {
const { slug } = await params;

const article = await client.fetch(
articleQuery,
{ slug }
);

if (!article) {
return new ImageResponse(
(
<div
style={{
width: "100%",
height: "100%",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "#F7F6F3",
fontSize: 48,
}}
>
Article not found </div>
),
size
);
}

const imageUrl = article.mainImage
? urlFor(article.mainImage)
.width(1200)
.height(630)
.url()
: null;

console.log(
"OG IMAGE URL:",
imageUrl
);

const category =
article.categories?.[0]?.title ||
"TINYSORTED";

return new ImageResponse(
(
<div
style={{
width: "1200px",
height: "630px",
display: "flex",
position: "relative",
background: "#111111",
overflow: "hidden",
}}
>
{imageUrl ? (
<img
src={imageUrl}
alt=""
style={{
width: "1200px",
height: "630px",
objectFit: "cover",
}}
/>
) : (
<div
style={{
width: "1200px",
height: "630px",
display: "flex",
background:
"#222222",
}}
/>
)}

```
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent:
          "space-between",
        padding: "60px",
       background:
           "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))"
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            background:
              "rgba(255,255,255,0.18)",
            color: "#ffffff",
            padding:
              "10px 18px",
            borderRadius:
              "999px",
            fontSize: 18,
            textTransform:
              "uppercase",
            letterSpacing:
              "0.15em",
          }}
        >
          {category}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection:
            "column",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: "90%",
            marginBottom: "24px",
          }}
        >
          {article.title}
        </div>

        {article.excerpt && (
          <div
            style={{
              display: "flex",
              color:
                "rgba(255,255,255,0.92)",
              fontSize: 28,
              lineHeight: 1.4,
              maxWidth: "75%",
              marginBottom:
                "24px",
            }}
          >
            {article.excerpt}
          </div>
        )}

        <div
          style={{
            display: "flex",
            color:
              "rgba(255,255,255,0.75)",
            fontSize: 22,
            letterSpacing:
              "0.25em",
            textTransform:
              "uppercase",
          }}
        >
          TINYSORTED
        </div>
      </div>
    </div>
  </div>
),
size

);
}
