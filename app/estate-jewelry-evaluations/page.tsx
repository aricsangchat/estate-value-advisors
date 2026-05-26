import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Jewelry Evaluations St. Louis",
  description:
    "Estate jewelry evaluations in St. Louis for inherited jewelry, watches, gold, diamonds, and heirlooms. Trusted guidance for families and executors.",
};

const items = [
  "Inherited jewelry collections",
  "Gold and precious metals",
  "Rolex and luxury watches",
  "Diamonds and gemstones",
  "Estate heirlooms",
  "Family collections and valuables",
];

export default function EstateJewelryEvaluationsPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Estate Jewelry Evaluations
            </p>

            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
              Trusted estate jewelry evaluations in St. Louis.
            </h1>

            <p className="text-lg text-[#5f665f]">
              Estate Value Advisors helps families, executors, trustees, and
              private clients better understand inherited jewelry, luxury
              watches, gold, diamonds, heirlooms, and personal collections.
            </p>

            <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-[#10271d]">
                Why families contact us
              </h2>

              <p className="mt-4 text-[#5f665f]">
                Most people simply want clarity. They want to understand what
                they have, what may hold value, and what options are available.
                Estate evaluations help reduce uncertainty during emotional and
                often overwhelming situations.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop"
              alt="Estate jewelry placeholder"
              className="h-[680px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
              Types of assets we commonly review.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-[#e8e0d2] bg-[#faf8f2] p-8"
              >
                <h3 className="font-serif text-2xl text-[#10271d]">{item}</h3>
                <p className="mt-3 text-[#5f665f]">
                  Professional guidance and evaluation support for estate and
                  inherited valuables.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
