import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Buyer St. Louis",
  description:
    "Professional gold and estate jewelry guidance in St. Louis. Help with inherited gold, jewelry collections, estate valuables, and evaluations.",
};

export default function GoldBuyerStLouisPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">
              ← Estate Value Advisors
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Gold & Estate Jewelry
            </p>

            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
              Gold evaluations and estate jewelry guidance in St. Louis.
            </h1>

            <p className="text-lg text-[#5f665f]">
              Estate Value Advisors helps families and individuals better understand inherited gold jewelry, estate collections, heirlooms, coins, and precious metal valuables.
            </p>

            <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-[#10271d]">
                More than just gold pricing
              </h2>

              <p className="mt-4 text-[#5f665f]">
                Many inherited items carry value beyond metal weight alone. Antique jewelry, designer pieces, diamonds, and estate collections often require more experienced review.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1610375461369-d613b56452ea?q=80&w=1400&auto=format&fit=crop"
              alt="Gold jewelry"
              className="h-[680px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
