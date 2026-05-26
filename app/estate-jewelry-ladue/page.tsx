import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Jewelry Ladue MO",
  description:
    "Estate jewelry evaluations and inherited asset guidance for Ladue families handling jewelry, watches, diamonds, heirlooms, and estate valuables.",
};

export default function EstateJewelryLaduePage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">Ladue Estate Jewelry Guidance</p>
          <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">Estate jewelry evaluations near Ladue, Missouri.</h1>
          <p className="text-lg text-[#5f665f]">Estate Value Advisors helps Ladue families navigate inherited jewelry, Rolex watches, diamonds, gold, heirlooms, and estate collections with experienced local guidance.</p>
          <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-[#10271d]">Trusted local experience</h2>
            <p className="mt-4 text-[#5f665f]">Families in Ladue often seek discreet, experienced guidance when handling inherited valuables and estate transitions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
