import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inherited Jewelry Guidance",
  description:
    "Guidance for inherited jewelry, watches, heirlooms, and estate valuables in St. Louis. Understand what you have and explore your options clearly.",
};

const questions = [
  "What may hold value?",
  "Should items be appraised?",
  "What should be kept or sold?",
  "How do resale values work?",
  "What options are available for families?",
  "How should inherited collections be reviewed?",
];

export default function InheritedJewelryPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">
              ← Estate Value Advisors
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Inherited Jewelry Guidance
            </p>

            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
              Not sure where to start with inherited jewelry?
            </h1>

            <p className="text-lg text-[#5f665f]">
              Many families inherit jewelry boxes, watches, gold, diamonds, and
              collections without knowing what may hold value or what steps to
              take next. Estate Value Advisors helps simplify that process.
            </p>

            <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-[#10271d]">
                A calmer process
              </h2>

              <p className="mt-4 text-[#5f665f]">
                The first step is usually understanding what you have. Families
                often want clear explanations, trusted guidance, and time to
                make informed decisions.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop"
              alt="Inherited jewelry"
              className="h-[680px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Common Questions
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
              Questions families often ask.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {questions.map((question) => (
              <div key={question} className="rounded-[28px] border border-[#e8e0d2] bg-[#faf8f2] p-8">
                <h3 className="font-serif text-2xl text-[#10271d]">
                  {question}
                </h3>
                <p className="mt-3 text-[#5f665f]">
                  Guidance designed to help families understand inherited
                  valuables with more confidence and clarity.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
