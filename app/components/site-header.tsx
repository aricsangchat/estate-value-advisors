"use client";

import Link from "next/link";
import { useState } from "react";

const mainNavItems = [
  { href: "/about-gary-bill", label: "About Gary" },
  { href: "/estate-jewelry-evaluations", label: "Evaluations" },
  { href: "/probate-estate-support", label: "Probate" },
  { href: "/inherited-jewelry", label: "Inherited Jewelry" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/sell-jewelry-st-louis", label: "Sell Jewelry St. Louis" },
  { href: "/sell-gold-st-louis", label: "Sell Gold St. Louis" },
  { href: "/cash-for-jewelry-st-louis", label: "Cash For Jewelry" },
  { href: "/sell-rolex-st-louis", label: "Sell Rolex" },
  { href: "/diamond-buyer-st-louis", label: "Diamond Buyer" },
  { href: "/estate-gold-buyer-st-louis", label: "Estate Gold Buyer" },
  { href: "/antique-jewelry-buyer-st-louis", label: "Antique Jewelry Buyer" },
  { href: "/sell-inherited-jewelry", label: "Inherited Jewelry" },
  { href: "/where-to-sell-estate-jewelry", label: "Where To Sell Estate Jewelry" },
  { href: "/best-place-to-sell-rolex-st-louis", label: "Best Place To Sell Rolex" },
  { href: "/estate-jewelry-st-louis", label: "Estate Jewelry St. Louis" },
  { href: "/jewelry-appraisal-st-louis", label: "Jewelry Appraisal" },
  { href: "/rolex-buyer-st-louis", label: "Rolex Buyer" },
  { href: "/gold-buyer-st-louis", label: "Gold Buyer" },
  { href: "/inherited-rolex", label: "Inherited Rolex" },
  { href: "/what-to-do-with-inherited-jewelry", label: "Inherited Jewelry Guide" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e0d2] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b08d3f] text-sm font-semibold text-[#b08d3f]">
            EVA
          </div>
          <div>
            <p className="font-serif text-xl text-[#10271d]">Estate Value Advisors</p>
            <p className="text-sm text-[#5f665f]">St. Louis Estate Guidance</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#1f2421] lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsServicesOpen((current) => !current)}
              className="whitespace-nowrap transition hover:text-[#b08d3f]"
              aria-expanded={isServicesOpen}
            >
              Services
            </button>

            {isServicesOpen && (
              <div className="absolute left-0 top-full w-[520px] pt-4">
                <div className="rounded-[28px] border border-[#e8e0d2] bg-white p-4 shadow-2xl">
                  <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b08d3f]">
                    Popular Searches
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="rounded-2xl px-3 py-3 text-[#10271d] transition hover:bg-[#faf8f2] hover:text-[#b08d3f]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {mainNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-[#b08d3f]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+13146803404"
            className="hidden rounded-full bg-[#10271d] px-5 py-3 text-sm font-semibold text-white md:inline-flex"
          >
            314-680-3404
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex rounded-full border border-[#e8e0d2] px-5 py-3 text-sm font-semibold text-[#10271d] lg:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#e8e0d2] bg-[#faf8f2] px-6 py-6 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b08d3f]">
                Main Pages
              </p>
              <div className="mt-5 grid gap-3">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-[#e8e0d2] px-4 py-3 text-[#10271d]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b08d3f]">
                Popular Searches
              </p>
              <div className="mt-5 grid gap-3">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-[#e8e0d2] px-4 py-3 text-[#10271d]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
