import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const documentLinks = [
  {
    label: "Download Company Profile",
    href: "/docs/Company-Profile-Lumbung-Group.pdf",
  },
  {
    label: "Lihat Biodata Owner",
    href: "/docs/Biodata-Owner-Lumbung-Group.pdf",
  },
];

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
            Lumbung Group
          </p>
          <h3 className="serif mt-3 text-3xl font-bold">Premium Kyohikari & Hikaru Specialist</h3>
          <p className="mt-4 text-sm text-emerald-100/80">
            Kami membantu restoran, hotel, dan retailer menjaga konsistensi rasa melalui pemilihan butir terbaik dan dukungan pengiriman nasional.
          </p>
          <div className="mt-6 space-y-3 text-sm font-semibold">
            <p>Tel: (021) 2279 5730</p>
            <p>Email: lumbungmakananutama@gmail.com</p>
            <p>Head Office: Jl. Pala I No. 50 A.LKMD, Pd Cabe Udik, Tangerang Selatan</p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
            Quick Access
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-emerald-100 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
              Credential Files
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {documentLinks.map((doc) => (
                <Link
                  key={doc.href}
                  href={doc.href}
                  className="text-emerald-100 transition hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {doc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300">
            Contact & Reseller Desk
          </p>
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">WhatsApp Owner</p>
            <p className="text-sm text-emerald-100">0821-1256-1613</p>
            <p className="mt-3 text-xs text-emerald-200">
              Available 09.00 - 21.00 WIB untuk konsultasi volume, kerja sama private label, dan jadwal kunjungan fasilitas.
            </p>
            <Link
              href="https://wa.me/6282112561613"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.4em] text-emerald-900 transition hover:bg-emerald-100"
            >
              Chat Sekarang
            </Link>
          </div>
          <div className="mt-6 text-xs text-emerald-200">
            <p>NPWP & NIB: Akan kami bagikan setelah legalisasi terbaru dirilis resmi.</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} PT Lumbung Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
