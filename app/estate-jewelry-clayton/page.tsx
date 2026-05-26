import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Jewelry Clayton MO",
  description:
    "Estate jewelry evaluations and inherited asset guidance for Clayton, Missouri families handling jewelry, watches, gold, diamonds, and heirlooms.",
};

export default function EstateJewelryClaytonPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">Clayton Estate Jewelry Guidance</p>
          <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">Estate jewelry evaluations near Clayton, Missouri.</h1>
          <p className="text-lg text-[#5f665f]">Estate Value Advisors works with families and individuals in Clayton seeking guidance for inherited jewelry, luxury watches, gold, diamonds, and estate collections.</p>
          <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-[#10271d]">Local estate guidance</h2>
            <p className="mt-4 text-[#5f665f]">Clients in Clayton often seek experienced, transparent guidance when handling inherited valuables and estate transitions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
