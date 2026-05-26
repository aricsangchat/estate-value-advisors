import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell Estate Jewelry St. Louis",
  description:
    "Guidance for selling estate jewelry in St. Louis. Understand inherited jewelry, watches, gold, diamonds, and heirloom collections before making decisions.",
};

export default function SellEstateJewelryStLouisPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">← Estate Value Advisors</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">Estate Jewelry Guidance</p>
            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">Selling estate jewelry in St. Louis.</h1>
            <p className="text-lg text-[#5f665f]">Many families are unsure how to approach inherited jewelry and estate valuables. Estate Value Advisors helps clients understand what they have, what may hold value, and what options are available before making decisions.</p>
            <div className="space-y-5 rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <div>
                <h2 className="font-serif text-2xl text-[#10271d]">Understand the collection first</h2>
                <p className="mt-3 text-[#5f665f]">Estate jewelry collections can include antique pieces, diamonds, luxury watches, gold, heirlooms, and designer items with different value factors.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-[#10271d]">Avoid rushed decisions</h2>
                <p className="mt-3 text-[#5f665f]">Clients often feel pressured after inheriting valuables. A clearer process helps families make more informed decisions.</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop" alt="Sell estate jewelry" className="h-[680px] w-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
