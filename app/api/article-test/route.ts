import { client } from "@/sanity/lib/client";
import { articlesByAuthorQuery } from "@/sanity/lib/queries";

export async function GET() {
  const data = await client.fetch(
    articlesByAuthorQuery,
    {
      slug: "tinysorted-team",
    }
  );

  return Response.json(data);
}