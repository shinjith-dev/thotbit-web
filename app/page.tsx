import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="py-20 text-center">
        <h3 className="font-bold tracking-tight font-serif text-6xl mb-4 max-w-xl mx-auto">
          A Place to Share Notes for Developers
        </h3>
        <p className="max-w-2xl mx-auto">Share your ideas on software, design and techs with the community through bite-sized quick notes. This project began as a corner for me <Link href="https://shijnith.dev" className="text-secondary hover:underline">me</Link> to share notes, but your contribution will sure make it better.</p>
      </div>

    </div>
  );
}
