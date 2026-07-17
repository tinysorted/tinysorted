console.log(
  "CF SANITY PROJECT:",
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

console.log(
  "CF SANITY DATASET:",
  process.env.NEXT_PUBLIC_SANITY_DATASET
);


import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-01",
  useCdn: false,
  perspective: "published",
});