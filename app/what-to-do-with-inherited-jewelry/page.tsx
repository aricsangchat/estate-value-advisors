import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What To Do With Inherited Jewelry",
  description:
    "A practical guide for families handling inherited jewelry, watches, gold, diamonds, heirlooms, and estate valuables in St. Louis.",
};

const steps = [
  "Avoid rushing important decisions",
  "Separate costume jewelry from fine jewelry",
  "Look for watches, diamonds, gold, and signed pieces",
  "Understand appraisal value versus resale value",
  "Document collections and family history",
  "Speak with an experienced estate jewelry advisor",
];

export default function WhatToDoWithInheritedJewelryPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl space-y-8">
          <Link href="/blog" className="text-sm font-semibold text-[#b08d3f]">← Back To Articles</Link>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">Inherited Jewelry Guide</p>

          <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">What should you do with inherited jewelry?</h1>

          <p className="text-lg text-[#5f665f]">
            Many families inherit jewelry boxes, watches, gold, diamonds, and heirlooms without fully understanding what may hold financial or sentimental value. The most important first step is slowing down and understanding the collection before making decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <div key={step} className="rounded-[28px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-[#10271d]">{step}</h2>
              <p className="mt-3 text-[#5f665f]">
                Guidance designed to help families make informed decisions about inherited valuables.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
