import Link from "next/link";

type CommercialLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryConcern: string;
  imageAlt: string;
  imageSrc?: string;
  points?: string[];
};

export function CommercialLandingPage({
  eyebrow,
  title,
  intro,
  primaryConcern,
  imageAlt,
  imageSrc = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop",
  points = [
    "Understand what you have before making a decision.",
    "Get clear guidance from an experienced local advisor.",
    "Avoid rushed conversations or pressure-based offers.",
    "Talk through your options with fairness and transparency.",
  ],
}: CommercialLandingPageProps) {
  return (
    <main className="bg-[#faf8f2] text-[#1f2421]">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
          <div className="space-y-7">
            <Link href="/" className="text-sm font-semibold text-[#b08d3f]">
              ← Estate Value Advisors
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              {eyebrow}
            </p>

            <h1 className="font-serif text-5xl leading-tight text-[#10271d] md:text-7xl">
              {title}
            </h1>

            <p className="text-lg text-[#5f665f]">{intro}</p>

            <div className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-3xl text-[#10271d]">
                Fair guidance before you decide.
              </h2>
              <p className="mt-4 text-[#5f665f]">{primaryConcern}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#10271d] px-7 py-4 font-semibold text-white"
              >
                Schedule A Consultation
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
            <img src={imageSrc} alt={imageAlt} className="h-[680px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
              What Clients Want To Know
            </p>
            <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
              You should feel informed, not pressured.
            </h2>
            <p className="text-lg text-[#5f665f]">
              People often contact a jewelry buyer because they are worried about being lowballed, confused about value, or unsure who to trust. The goal is to create clarity first.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {points.map((point) => (
              <div key={point} className="rounded-[28px] border border-[#e8e0d2] bg-[#faf8f2] p-8">
                <h3 className="font-serif text-2xl text-[#10271d]">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
