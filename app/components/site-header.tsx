import Link from "next/link";

const navItems = [
  { href: "/about-gary-bill", label: "About Gary" },
  { href: "/estate-jewelry-evaluations", label: "Evaluations" },
  { href: "/probate-estate-support", label: "Probate Support" },
  { href: "/inherited-jewelry", label: "Inherited Jewelry" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e0d2] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b08d3f] text-sm font-semibold text-[#b08d3f]">
            EVA
          </div>
          <div>
            <p className="font-serif text-xl text-[#10271d]">Estate Value Advisors</p>
            <p className="text-sm text-[#5f665f]">St. Louis Estate Guidance</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#1f2421] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#b08d3f]">
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
    </header>
  );
}
