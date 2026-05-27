export function LocalMapSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
            Local St. Louis Office
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
            Visit Estate Value Advisors in St. Louis.
          </h2>

          <p className="text-lg text-[#5f665f]">
            Estate Value Advisors works with families, executors, attorneys, and
            individuals throughout St. Louis and nearby communities including
            Clayton, Ladue, Chesterfield, Creve Coeur, and St. Louis County.
          </p>

          <div className="rounded-[28px] border border-[#e8e0d2] bg-[#faf8f2] p-8">
            <p className="font-serif text-2xl text-[#10271d]">7805 Olive Blvd</p>
            <p className="mt-2 text-[#5f665f]">St. Louis, Missouri 63130</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=7805+Olive+Blvd+St.+Louis+MO+63130"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#10271d] px-6 py-3 text-sm font-semibold text-white"
              >
                Open In Google Maps
              </a>
              <a
                href="tel:+13146803404"
                className="rounded-full border border-[#10271d]/20 px-6 py-3 text-sm font-semibold text-[#10271d]"
              >
                Call 314-680-3404
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#e8e0d2] bg-[#faf8f2] shadow-sm">
          <iframe
            title="Estate Value Advisors location map"
            src="https://www.google.com/maps?q=7805%20Olive%20Blvd%2C%20St.%20Louis%2C%20MO%2063130&output=embed"
            className="h-[520px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
