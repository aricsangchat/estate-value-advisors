import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Jewelry Chesterfield MO",
  description:
    "Estate jewelry evaluations and inherited asset guidance for Chesterfield families handling jewelry, watches, diamonds, gold, and heirlooms.",
};

export default function EstateJewelryChesterfieldPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">Chesterfield Estate Jewelry Guidance</p>
          <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">Estate jewelry evaluations near Chesterfield, Missouri.</h1>
          <p className="text-lg text-[#5f665f]">Estate Value Advisors works with Chesterfield families and individuals seeking guidance for inherited jewelry, watches, estate valuables, diamonds, and heirloom collections.</p>
          <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-[#10271d]">Estate transition guidance</h2>
            <p className="mt-4 text-[#5f665f]">Many inherited collections contain pieces with emotional and financial significance. Professional guidance helps families make informed decisions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
