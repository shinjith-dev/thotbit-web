import Notes from "@/components/notes";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thotbit",
  description:
    "Think in bites, share in notes. Thotbit is a modern note-sharing platform for developers. Thotbit allows people to share their knowledge, insights, and experiences through brief notes.",
  keywords: ["notes", "note", "blogs", "blog", "technology", "tech"],
  openGraph: {
    url: "https://thotbit.shinjith.dev",
    type: "website",
    title: "Thotbit",
    description:
      "Think in bites, share in notes. Thotbit is a modern note-sharing platform for developers. Thotbit allows people to share their knowledge, insights, and experiences through brief notes.",
    images: [
      {
        url: "https://thotbit.shinjith.dev/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "thotbit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thotbit",
    description:
      "Think in bites, share in notes. Thotbit is a modern note-sharing platform for developers. Thotbit allows people to share their knowledge, insights, and experiences through brief notes.",
    creator: "@shinjith-dev",
    site: "@shinjith-dev",
    images: [
      {
        url: "https://thotbit.shinjith.dev/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "thotbit",
      },
    ],
  },
  alternates: {
    canonical: "https://thotbit-web.pages.app",
  },
};

export default function Page() {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20">
      <div className="py-10 text-center sm:py-14 md:py-16 lg:py-20">
        <h3 className="mx-auto mb-2 max-w-[240px] font-serif text-2xl font-bold tracking-tight sm:max-w-[300px] sm:text-3xl md:mb-4 md:max-w-sm md:text-4xl lg:max-w-md lg:text-5xl xl:max-w-xl xl:text-6xl">
          A Place to Share Notes for Developers
        </h3>
        <p className="mx-auto max-w-xs text-xs sm:max-w-sm sm:text-sm md:max-w-md md:text-base lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          Share your ideas on software, design and techs with the community
          through bite-sized quick notes. This project began as a corner for me{" "}
          <Link
            href="https://shijnith.dev"
            className="text-secondary hover:underline"
          >
            me
          </Link>{" "}
          to share notes, but your contribution will sure make it better.
        </p>
      </div>

      <Notes />
    </div>
  );
}
