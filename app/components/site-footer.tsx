export function SiteFooter() {
  return (
    <footer className="border-t border-[#e8e0d2] bg-[#10271d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl">Estate Value Advisors</h3>
          <p className="text-[#dce6df]">
            Trusted estate jewelry and inherited asset guidance in St. Louis.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#d7c18a]">Contact</h4>
          <div className="mt-4 space-y-2 text-[#dce6df]">
            <p>314-680-3404</p>
            <p>info@estatevalueadvisors.com</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[#d7c18a]">Location</h4>
          <div className="mt-4 space-y-2 text-[#dce6df]">
            <p>7805 Olive Blvd</p>
            <p>St. Louis, Missouri 63130</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[#d7c18a]">Service Areas</h4>
          <div className="mt-4 space-y-2 text-[#dce6df]">
            <p>St. Louis</p>
            <p>Clayton</p>
            <p>Ladue</p>
            <p>Creve Coeur</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
