"use client";

import { MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/6285811848112?text=Halo%20Admin!%20%F0%9F%91%8B%0A%0ASaya%20tertarik%20untuk%20membeli%20produk%20%5BNama%20Produk%5D.%20Bolehkah%20dibantu%20untuk%20proses%20pemesanannya%3F";

export default function ContactForm() {
  return (
    <div className="rounded-[3rem] bg-white p-8 text-stone-900 shadow-2xl sm:p-12">
      <div className="mb-8">
        <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-700">
          B2B Inquiry Form
        </span>
        <h3 className="serif text-2xl font-bold text-emerald-950 sm:text-3xl">
          Request Quotation & Consultation
        </h3>
        <p className="mt-3 text-sm text-stone-600">
          Isi form berikut dan tim kami akan menghubungi Anda dalam 24 jam untuk diskusi detail kebutuhan procurement.
        </p>
      </div>

      <form className="space-y-5">
        {/* Company Name */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
            Nama Perusahaan *
          </label>
          <input
            type="text"
            placeholder="PT. Contoh Indonesia"
            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            required
          />
        </div>

        {/* Contact Person */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
              nama kamu *
            </label>
            <input
              type="text"
              placeholder="Budi Santoso"
              className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
              Jabatan
            </label>
            <input
              type="text"
              placeholder="Procurement Manager"
              className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
              Email *
            </label>
            <input
              type="email"
              placeholder="procurement@company.com"
              className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
              Nomor Telepon *
            </label>
            <input
              type="tel"
              placeholder="08123456789"
              className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              required
            />
          </div>
        </div>

        {/* Business Type */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
            Tipe Bisnis *
          </label>
          <select
            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            required
          >
            <option value="">Pilih kategori bisnis</option>
            <option value="hotel">Hotel / Resort</option>
            <option value="restaurant">Restaurant / Cafe</option>
            <option value="retail">Modern Retail / Supermarket</option>
            <option value="catering">Catering / Cloud Kitchen</option>
            <option value="distributor">Distributor / Wholesaler</option>
            <option value="other">Lainnya</option>
          </select>
        </div>

        {/* Monthly Volume */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
            Estimasi Kebutuhan per Bulan *
          </label>
          <select
            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            required
          >
            <option value="">Pilih range volume</option>
            <option value="<100kg">{"< 100 kg (Trial Order)"}</option>
            <option value="100-500kg">100 - 500 kg</option>
            <option value="500kg-1ton">500 kg - 1 Ton</option>
            <option value="1-3ton">1 - 3 Ton</option>
            <option value=">3ton">{"> 3 Ton (Enterprise)"}</option>
          </select>
        </div>

        {/* Product Interest */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
            Produk yang Diminati
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-stone-300 text-emerald-600" />
              <span className="text-sm">Kyohikari White Rice (Premium)</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-stone-300 text-emerald-600" />
              <span className="text-sm">Hikaru Professional Line</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-stone-300 text-emerald-600" />
              <span className="text-sm">Specialty Grains (Red/Black Rice, Beans)</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-700">
            Pesan / Kebutuhan Spesifik
          </label>
          <textarea
            placeholder="Deskripsikan kebutuhan Anda: packaging custom, private label, delivery schedule, dll."
            rows={4}
            className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={() => {
            // For now, redirect to WhatsApp with pre-filled message
            window.open(whatsappLink, '_blank');
          }}
          className="w-full rounded-full bg-emerald-950 py-4 text-sm font-bold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-emerald-900 active:scale-95"
        >
          <MessageCircle className="inline-block h-4 w-4 mr-2" />
          Kirim Inquiry via WhatsApp
        </button>

        <p className="text-center text-xs text-stone-500">
          Form ini akan membuka WhatsApp dengan pesan pre-filled. Anda bisa edit sebelum mengirim.
        </p>
      </form>
    </div>
  );
}
