import Link from "next/link";

const services = [
  {
    title: "Estate Jewelry Evaluations",
    description:
      "Clear guidance for inherited jewelry, diamonds, gold, watches, and heirlooms.",
  },
  {
    title: "Probate & Attorney Support",
    description:
      "Professional estate asset support for executors, attorneys, trustees, and families.",
  },
  {
    title: "Gold & Luxury Watch Reviews",
    description:
      "Experienced review of Rolex, luxury watches, gold, and estate valuables.",
  },
  {
    title: "Direct Purchase Options",
    description:
      "Transparent direct purchase opportunities for qualifying estate assets.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="relative overflow-hidden bg-[#10271d] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1800&auto=format&fit=crop"
            alt="Estate jewelry"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7c18a]">
                Trusted Estate Guidance
              </p>

              <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-7xl">
                Estate jewelry and inherited asset evaluations in St. Louis.
              </h1>

              <p className="max-w-2xl text-lg text-[#e4ece7] md:text-xl">
                Calm, transparent guidance for families, executors, attorneys,
                and individuals navigating inherited jewelry, watches, gold,
                heirlooms, and estate valuables.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#b08d3f] px-7 py-4 font-semibold text-white transition hover:bg-[#9d7b31]"
              >
                Schedule A Consultation
              </Link>

              <a
                href="tel:+13146803404"
                className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white"
              >
                Call 314-680-3404
              </a>
            </div>

            <div className="grid gap-4 pt-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-semibold text-[#d7c18a]">40+</p>
                <p className="mt-2 text-sm text-[#dce6df]">
                  Years of experience with estate jewelry and valuables.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-semibold text-[#d7c18a]">Local</p>
                <p className="mt-2 text-sm text-[#dce6df]">
                  Trusted St. Louis guidance for families and executors.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-semibold text-[#d7c18a]">Clear</p>
                <p className="mt-2 text-sm text-[#dce6df]">
                  Transparent evaluations without pressure or confusion.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#faf8f2] p-8 text-[#1f2421] shadow-2xl">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b08d3f]">
                Meet Gary Bill
              </p>

              <h2 className="font-serif text-4xl leading-tight">
                A calm, experienced approach to inherited valuables.
              </h2>

              <p className="text-[#5f665f]">
                Gary Bill has spent decades helping St. Louis families evaluate
                estate jewelry, watches, gold, heirlooms, and personal
                collections with honesty, patience, and professionalism.
              </p>

              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                  alt="Professional estate advisor"
                  className="h-[320px] w-full object-cover"
                />
              </div>

              <div className="space-y-3 text-sm text-[#5f665f]">
                <p>✓ Estate jewelry and heirloom evaluations</p>
                <p>✓ Probate and executor support</p>
                <p>✓ Rolex, luxury watches, and gold guidance</p>
                <p>✓ Private consultations and transparent process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
            Estate Services
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
            Trusted support during estate transitions.
          </h2>

          <p className="text-lg text-[#5f665f]">
            Families are often left with jewelry boxes, watches, gold,
            heirlooms, and collections they do not fully understand. Estate
            Value Advisors helps clients navigate those decisions clearly and
            professionally.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-[#e8e0d2] bg-white p-8 shadow-sm"
            >
              <h3 className="font-serif text-2xl text-[#10271d]">
                {service.title}
              </h3>
              <p className="mt-4 text-[#5f665f]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
              alt="Estate jewelry review"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              Why Families Contact Us
            </p>

            <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
              Most people are not looking for a buyer first.
            </h2>

            <p className="text-lg text-[#5f665f]">
              They are looking for clarity, reassurance, and someone they can
              trust. Many clients simply want to understand what they have,
              what may hold value, and what options make sense for their
              family.
            </p>

            <div className="space-y-5 rounded-[28px] border border-[#e8e0d2] bg-[#faf8f2] p-8">
              <div>
                <h3 className="font-serif text-2xl">Transparent Process</h3>
                <p className="mt-2 text-[#5f665f]">
                  Clear communication and straightforward guidance.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl">Local Experience</h3>
                <p className="mt-2 text-[#5f665f]">
                  Decades of St. Louis estate and jewelry experience.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl">No Pressure</h3>
                <p className="mt-2 text-[#5f665f]">
                  Calm conversations focused on helping clients make informed
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
