import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",

  description:
    "Search articles about decluttering, organization, small-space living, and home inspiration.",

  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}