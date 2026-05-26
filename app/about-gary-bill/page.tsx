import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gary Bill",
  description:
    "Meet Gary Bill, a longtime St. Louis estate jewelry and inherited asset advisor helping families, executors, and attorneys with clear, trusted guidance.",
};

export default function AboutGaryBillPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto grid min-h-screen max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
            alt="Gary Bill estate advisor placeholder portrait"
            className="h-[620px] w-full object-cover"
          />
        </div>

        <div className="space-y-7">
          <Link href="/" className="text-sm font-semibold text-[#b08d3f]">
            ← Estate Value Advisors
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
            Meet The Advisor
          </p>

          <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
            Decades of calm, experienced estate jewelry guidance in St. Louis.
          </h1>

          <p className="text-lg text-[#5f665f]">
            Gary Bill brings a patient, practical, and deeply experienced approach
            to estate jewelry, watches, gold, heirlooms, and personal collections.
            For families handling an estate, the first need is often not a quick
            sale — it is clarity from someone trustworthy.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-[#e8e0d2] bg-white p-6">
              <p className="text-3xl font-semibold text-[#10271d]">40+</p>
              <p className="mt-2 text-sm text-[#5f665f]">Years of experience</p>
            </div>
            <div className="rounded-3xl border border-[#e8e0d2] bg-white p-6">
              <p className="text-3xl font-semibold text-[#10271d]">Local</p>
              <p className="mt-2 text-sm text-[#5f665f]">St. Louis guidance</p>
            </div>
            <div className="rounded-3xl border border-[#e8e0d2] bg-white p-6">
              <p className="text-3xl font-semibold text-[#10271d]">Clear</p>
              <p className="mt-2 text-sm text-[#5f665f]">No-pressure process</p>
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-[#10271d]">
              Gary's philosophy
            </h2>
            <p className="mt-4 text-[#5f665f]">
              Estate assets are personal. Many clients are dealing with family
              history, probate responsibilities, or the emotional weight of an
              inheritance. Gary's role is to help people understand what they
              have, what may hold value, and what options are available without
              pressure or confusion.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#10271d] px-7 py-4 font-semibold text-white"
          >
            Schedule A Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
