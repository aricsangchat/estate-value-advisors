import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Probate Estate Support St. Louis",
  description:
    "Estate asset support in St. Louis for attorneys, executors, trustees, and families handling inherited jewelry, watches, gold, and valuables.",
};

const support = [
  "Estate jewelry and watch reviews",
  "Guidance for executors and trustees",
  "Support for attorney-led estate matters",
  "Clear explanations of value factors",
  "Private consultations for families",
  "Direct purchase options when appropriate",
];

export default function ProbateEstateSupportPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">
              ← Estate Value Advisors
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Probate & Executor Support
            </p>

            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
              Estate asset guidance for families, executors, and attorneys.
            </h1>

            <p className="text-lg text-[#5f665f]">
              Executors, trustees, attorneys, and family members often need a
              steady process for understanding inherited jewelry, watches, gold,
              heirlooms, and estate valuables. Estate Value Advisors helps make
              that process clearer, calmer, and more professional.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#10271d] px-7 py-4 font-semibold text-white"
              >
                Discuss An Estate Matter
              </Link>
              <a
                href="tel:+13146803404"
                className="rounded-full border border-[#10271d]/20 px-7 py-4 font-semibold text-[#10271d]"
              >
                Call 314-680-3404
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop"
              alt="Estate documents placeholder"
              className="h-[640px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Support Areas
            </p>
            <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
              Clear help when estate decisions need to be handled carefully.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {support.map((item) => (
              <div key={item} className="rounded-[28px] border border-[#e8e0d2] bg-[#faf8f2] p-8">
                <h3 className="font-serif text-2xl text-[#10271d]">{item}</h3>
                <p className="mt-3 text-[#5f665f]">
                  Professional guidance designed to help clients make informed
                  decisions during estate transitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
