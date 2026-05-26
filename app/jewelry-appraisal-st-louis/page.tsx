import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewelry Appraisal St. Louis",
  description:
    "Jewelry appraisal and estate jewelry evaluation guidance in St. Louis for inherited jewelry, diamonds, watches, gold, and heirlooms.",
};

export default function JewelryAppraisalStLouisPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">← Estate Value Advisors</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">Jewelry Appraisal & Evaluation Guidance</p>
            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">Jewelry appraisal guidance in St. Louis.</h1>
            <p className="text-lg text-[#5f665f]">When families inherit jewelry, diamonds, watches, gold, or heirlooms, they often need help understanding what they have and what kind of value matters. Estate Value Advisors provides calm guidance for estate jewelry evaluations in St. Louis.</p>
            <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-[#10271d]">Appraisal value vs. resale value</h2>
              <p className="mt-4 text-[#5f665f]">Insurance appraisals, fair market value, and resale value can mean different things. We help clients understand those differences before making decisions.</p>
            </div>
            <Link href="/contact" className="inline-flex rounded-full bg-[#10271d] px-7 py-4 font-semibold text-white">Request Guidance</Link>
          </div>
          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1400&auto=format&fit=crop" alt="Jewelry appraisal St Louis" className="h-[680px] w-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
