import Link from "next/link";

const primaryNavItems = [
  { href: "/about-gary-bill", label: "About Gary" },
  { href: "/estate-jewelry-evaluations", label: "Evaluations" },
  { href: "/estate-jewelry-st-louis", label: "St. Louis" },
  { href: "/probate-estate-support", label: "Probate" },
  { href: "/inherited-jewelry", label: "Inherited Jewelry" },
  { href: "/contact", label: "Contact" },
];

const secondaryNavItems = [
  { href: "/jewelry-appraisal-st-louis", label: "Jewelry Appraisal" },
  { href: "/sell-estate-jewelry-st-louis", label: "Sell Estate Jewelry" },
  { href: "/rolex-buyer-st-louis", label: "Rolex" },
  { href: "/gold-buyer-st-louis", label: "Gold" },
  { href: "/what-to-do-with-inherited-jewelry", label: "Inherited Guide" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e0d2] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b08d3f] text-sm font-semibold text-[#b08d3f]">
            EVA
          </div>
          <div>
            <p className="font-serif text-xl text-[#10271d]">Estate Value Advisors</p>
            <p className="text-sm text-[#5f665f]">St. Louis Estate Guidance</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-[#1f2421] lg:flex">
          {primaryNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-[#b08d3f]">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+13146803404"
          className="hidden rounded-full bg-[#10271d] px-5 py-3 text-sm font-semibold text-white md:inline-flex"
        >
          314-680-3404
        </a>
      </div>

      <nav className="border-t border-[#e8e0d2] bg-[#faf8f2] px-6 py-3">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm text-[#1f2421]">
          {[...primaryNavItems, ...secondaryNavItems].map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full border border-[#e8e0d2] bg-white px-4 py-2 transition hover:border-[#b08d3f] hover:text-[#b08d3f]">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
