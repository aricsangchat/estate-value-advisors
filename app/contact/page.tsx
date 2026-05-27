import type { Metadata } from "next";
import { LocalMapSection } from "../components/local-map-section";

export const metadata: Metadata = {
  title: "Contact Estate Value Advisors",
  description:
    "Contact Estate Value Advisors in St. Louis for estate jewelry evaluations, inherited asset guidance, probate support, and consultations.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
            Contact
          </p>

          <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
            Schedule a private consultation.
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-[#5f665f]">
            Estate Value Advisors provides calm, professional guidance for
            inherited jewelry, watches, gold, heirlooms, and estate valuables
            throughout the St. Louis area.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-10 shadow-sm">
            <h2 className="font-serif text-3xl text-[#10271d]">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6 text-[#5f665f]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#b08d3f]">
                  Phone
                </p>
                <a href="tel:+13146803404" className="mt-2 block text-lg">
                  314-680-3404
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#b08d3f]">
                  Email
                </p>
                <a
                  href="mailto:info@estatevalueadvisors.com"
                  className="mt-2 block text-lg"
                >
                  info@estatevalueadvisors.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#b08d3f]">
                  Location
                </p>
                <p className="mt-2 text-lg">
                  7805 Olive Blvd
                  <br />
                  St. Louis, MO 63130
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
              alt="Consultation placeholder"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <LocalMapSection />
    </main>
  );
}
