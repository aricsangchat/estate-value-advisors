const reviews = [
  {
    quote:
      "Gary helped our family understand what we actually had before making any decisions. The process felt calm, transparent, and professional.",
    author: "Estate Client",
  },
  {
    quote:
      "We were overwhelmed after inheriting jewelry and watches. Estate Value Advisors gave us clarity without pressure.",
    author: "St. Louis Family",
  },
  {
    quote:
      "The experience felt honest and reassuring. We appreciated having someone local who clearly understood estate jewelry and inherited valuables.",
    author: "Local Client",
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-[#faf8f2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08d3f]">
            Trusted Local Guidance
          </p>

          <h2 className="font-serif text-5xl leading-tight text-[#10271d]">
            Families want fairness, reassurance, and clarity.
          </h2>

          <p className="text-lg text-[#5f665f]">
            Estate Value Advisors focuses on helping clients feel informed and comfortable during estate transitions and inherited jewelry decisions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.quote}
              className="rounded-[32px] border border-[#e8e0d2] bg-white p-8 shadow-sm"
            >
              <p className="text-lg leading-relaxed text-[#10271d]">
                “{review.quote}”
              </p>

              <div className="mt-8 border-t border-[#e8e0d2] pt-5">
                <p className="font-semibold text-[#10271d]">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
