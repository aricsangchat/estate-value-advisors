import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rolex Buyer St. Louis",
  description:
    "Trusted Rolex and luxury watch guidance in St. Louis. Estate Value Advisors helps clients evaluate inherited Rolex watches and luxury timepieces.",
};

export default function RolexBuyerStLouisPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">
              ← Estate Value Advisors
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Rolex & Luxury Watch Guidance
            </p>

            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
              Rolex evaluations and luxury watch guidance in St. Louis.
            </h1>

            <p className="text-lg text-[#5f665f]">
              Families and collectors often inherit Rolex watches and luxury timepieces without fully understanding their value or market demand. Estate Value Advisors helps clients navigate those decisions clearly.
            </p>

            <div className="space-y-5 rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <div>
                <h2 className="font-serif text-2xl text-[#10271d]">
                  Common situations
                </h2>
                <p className="mt-3 text-[#5f665f]">
                  Inherited Rolex watches, estate collections, family heirlooms, and luxury watch evaluations.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#10271d]">
                  Clear guidance
                </h2>
                <p className="mt-3 text-[#5f665f]">
                  Understand model demand, condition factors, and available options before making decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury watch"
              className="h-[680px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
