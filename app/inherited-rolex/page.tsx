import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inherited Rolex Guidance",
  description:
    "Guidance for inherited Rolex watches and luxury timepieces in St. Louis. Understand model demand, condition, and estate watch evaluations.",
};

export default function InheritedRolexPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">← Estate Value Advisors</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">Inherited Rolex Guidance</p>
            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">What should you do with an inherited Rolex?</h1>
            <p className="text-lg text-[#5f665f]">Many families inherit Rolex watches and luxury timepieces without fully understanding the market, model demand, or condition factors that affect value. Estate Value Advisors helps clients navigate those questions more clearly.</p>
            <div className="space-y-5 rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <div>
                <h2 className="font-serif text-2xl text-[#10271d]">Important factors</h2>
                <p className="mt-3 text-[#5f665f]">Rolex model type, condition, box and papers, service history, rarity, and market demand can all affect value.</p>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-[#10271d]">Avoid rushed decisions</h2>
                <p className="mt-3 text-[#5f665f]">Families often benefit from understanding the watch first before deciding whether to keep, insure, or sell it.</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1400&auto=format&fit=crop" alt="Inherited Rolex" className="h-[680px] w-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
