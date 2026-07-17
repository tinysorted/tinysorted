import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tinysorted",

    short_name: "Tinysorted",

    description:
      "Practical ideas for decluttering, organizing, and creating a calm, beautiful home.",

    start_url: "/",

    display: "standalone",

    background_color: "#F7F6F3",

    theme_color: "#F7F6F3",

    orientation: "portrait",

    lang: "en",

    categories: [
      "home",
      "lifestyle",
      "productivity",
    ],

    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },

      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },

      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}