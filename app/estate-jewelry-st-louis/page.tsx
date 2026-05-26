import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estate Jewelry St. Louis",
  description:
    "Estate jewelry evaluations and inherited asset guidance in St. Louis. Help with watches, gold, diamonds, heirlooms, and estate collections.",
};

export default function EstateJewelryStLouisPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">
              ← Estate Value Advisors
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              St. Louis Estate Jewelry Guidance
            </p>

            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
              Estate jewelry evaluations in St. Louis.
            </h1>

            <p className="text-lg text-[#5f665f]">
              Estate Value Advisors helps St. Louis families better understand inherited jewelry, watches, gold, diamonds, heirlooms, and estate valuables with calm professional guidance.
            </p>

            <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-[#10271d]">
                Why local families contact us
              </h2>

              <p className="mt-4 text-[#5f665f]">
                Many people are unsure where to start after inheriting jewelry or estate collections. They want clarity, transparency, and someone experienced who understands estate valuables.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop"
              alt="Estate jewelry St Louis"
              className="h-[680px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
