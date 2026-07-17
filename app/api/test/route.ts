import { client } from "@/sanity/lib/client";
import { authorQuery } from "@/sanity/lib/queries";

export async function GET() {
  const data = await client.fetch(authorQuery, {
    slug: "tinysorted-team",
  });

  return Response.json(data);
}