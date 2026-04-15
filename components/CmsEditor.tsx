"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Partner } from "../lib/data/partners";
import type { Product, ProductCategory } from "../lib/data/products";
import type { HomePageContent } from "../lib/data/home";
import CloudinaryUploadButton from "./CloudinaryUploadButton";

interface CmsEditorProps {
  initialProducts: Product[];
  initialPartners: Partner[];
  initialHome: HomePageContent;
  updatedAt: string;
}

type CmsTab = "home" | "products" | "partners";
type HomeEditorTab = "hero" | "stats" | "creds" | "quality";

const categoryOptions: Array<{ label: string; value: ProductCategory }> = [
  { label: "🌾 Beras Biasa", value: "rice" },
  { label: "🌽 Biji-bijian Lain", value: "grains" },
  { label: "⭐ Beras Spesial (Hikaru)", value: "hikaru" },
];

const badgeColorOptions: Array<{ label: string; value: string }> = [
  { label: "🟢 Hijau", value: "text-emerald-600" },
  { label: "🔴 Merah", value: "text-red-600" },
  { label: "🟣 Ungu", value: "text-purple-700" },
  { label: "🔵 Biru", value: "text-sky-600" },
  { label: "🟠 Oranye", value: "text-amber-600" },
  { label: "🪨 Abu-abu", value: "text-stone-700" },
];

function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "item"
  );
}

function createUniqueId(base: string, existingIds: string[]): string {
  const root = slugify(base);
  if (!existingIds.includes(root)) {
    return root;
  }

  let suffix = 2;
  while (existingIds.includes(`${root}-${suffix}`)) {
    suffix += 1;
  }

  return `${root}-${suffix}`;
}

function createProductDraft(seed?: Partial<Product>): Product {
  const title = seed?.title ?? "Barang Baru Yuk!";
  return {
    id: seed?.id ?? slugify(title),
    title,
    category: seed?.category ?? "rice",
    image: seed?.image ?? "/beras-jepang-2kg.jpeg",
    badge: seed?.badge ?? "Beras Super",
    badgeColor: seed?.badgeColor ?? "text-emerald-600",
    description:
      seed?.description ??
      "Tuliskan cerita singkat tentang barang ini. Apa yang bikin barang ini enak dan bagus?",
    size: seed?.size ?? "1 KG",
    ribbon: seed?.ribbon,
  };
}

function createPartnerDraft(seed?: Partial<Partner>): Partner {
  return {
    name: seed?.name ?? "Teman Baru",
    sector: seed?.sector ?? "Toko Kue",
    logo: seed?.logo ?? "/partners/the-food-hall.png",
  };
}

export default function CmsEditor({
  initialProducts,
  initialPartners,
  initialHome,
  updatedAt,
}: CmsEditorProps) {
  const router = useRouter();
  const [tab, setTab] = useState<CmsTab>("home");
  const [homeEditorTab, setHomeEditorTab] = useState<HomeEditorTab>("hero");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [partners, setPartners] = useState<Partner[]>(initialPartners);
  const [home, setHome] = useState<HomePageContent>(initialHome);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(0);
  const [status, setStatus] = useState("✨ Semuanya aman! Belum ada yang diubah.");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setSelectedProductIndex(0);
      return;
    }
    setSelectedProductIndex((current) => Math.min(current, products.length - 1));
  }, [products.length]);

  useEffect(() => {
    if (partners.length === 0) {
      setSelectedPartnerIndex(0);
      return;
    }
    setSelectedPartnerIndex((current) => Math.min(current, partners.length - 1));
  }, [partners.length]);

  function updateHomeHero(key: keyof HomePageContent["hero"], value: string) {
    setHome((current) => ({ ...current, hero: { ...current.hero, [key]: value } }));
  }

  function updateHomeQuality(key: keyof HomePageContent["quality"], value: string) {
    setHome((current) => ({ ...current, quality: { ...current.quality, [key]: value } }));
  }

  function updateHomeVideo(index: number, value: string) {
    setHome((current) => ({
      ...current,
      quality: {
        ...current.quality,
        videoUrls: current.quality.videoUrls.map((item, itemIndex) =>
          itemIndex === index ? value : item,
        ),
      },
    }));
  }

  function addHomeVideo() {
    setHome((current) => ({
      ...current,
      quality: { ...current.quality, videoUrls: [...current.quality.videoUrls, ""] },
    }));
  }

  function removeHomeVideo(index: number) {
    setHome((current) => ({
      ...current,
      quality: {
        ...current.quality,
        videoUrls: current.quality.videoUrls.filter((_, itemIndex) => itemIndex !== index),
      },
    }));
  }

  function updateHomeStat(index: number, key: "label" | "value", value: string) {
    setHome((current) => ({
      ...current,
      stats: current.stats.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      ),
    }));
  }

  function updateHomeCredential(index: number, key: "label" | "href", value: string) {
    setHome((current) => ({
      ...current,
      credentials: current.credentials.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      ),
    }));
  }

  function addHomeStat() {
    setHome((current) => ({
      ...current,
      stats: [...current.stats, { label: "Keterangan Baru", value: "100" }],
    }));
  }

  function removeHomeStat(index: number) {
    setHome((current) => ({
      ...current,
      stats: current.stats.filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  function addHomeCredential() {
    setHome((current) => ({
      ...current,
      credentials: [...current.credentials, { label: "Dokumen Baru", href: "/docs/" }],
    }));
  }

  function removeHomeCredential(index: number) {
    setHome((current) => ({
      ...current,
      credentials: current.credentials.filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  function updateProduct(index: number, patch: Partial<Product>) {
    setSelectedProductIndex(index);
    setProducts((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)),
    );
  }

  function updatePartner(index: number, patch: Partial<Partner>) {
    setSelectedPartnerIndex(index);
    setPartners((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)),
    );
  }

  function duplicateProduct(index: number) {
    const copy = {
      ...products[index],
      id: createUniqueId(`${products[index].id}-copy`, products.map((product) => product.id)),
      title: `${products[index].title} (Copy)`,
    };
    setProducts((current) => {
      const next = [...current];
      next.splice(index + 1, 0, copy);
      return next;
    });
  }

  function duplicatePartner(index: number) {
    const copy = { ...partners[index], name: `${partners[index].name} (Copy)` };
    setPartners((current) => {
      const next = [...current];
      next.splice(index + 1, 0, copy);
      return next;
    });
  }

  function addProduct() {
    setProducts((current) => {
      const nextId = createUniqueId("barang-baru", current.map((product) => product.id));
      const next = [...current, createProductDraft({ id: nextId, title: "Barang Baru Kita" })];
      setSelectedProductIndex(next.length - 1);
      return next;
    });
    setTab("products");
  }

  function addPartner() {
    setPartners((current) => {
      const next = [
        ...current,
        createPartnerDraft({ name: `Teman Bekerja Sama ${current.length + 1}` }),
      ];
      setSelectedPartnerIndex(next.length - 1);
      return next;
    });
    setTab("partners");
  }

  function removeProduct(index: number) {
    setProducts((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  function removePartner(index: number) {
    setPartners((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  async function handleSave() {
    setStatus("⏳ Sebentar ya, sedang dikirim ke website...");
    setSaving(true);

    try {
      const response = await fetch("/api/cms/data", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products,
          partners,
          home,
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus(`❌ Yah gagal: ${payload.message ?? "Ada yang salah nih."}`);
        return;
      }

      setStatus("🎉 Yey! Perubahan sudah berhasil tampil di website!");
      router.refresh();
    } catch {
      setStatus("🔌 Aduh, sepertinya internetnya lagi ngambek. Coba pencet simpan lagi ya!");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/cms/logout", { method: "POST" });
    router.push("/cms/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-sky-50 px-4 py-8 font-sans sm:px-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="overflow-hidden rounded-[2rem] border-4 border-white bg-emerald-600 bg-gradient-to-br from-emerald-500 to-teal-700 p-6 text-white shadow-xl sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="inline-block rounded-full bg-yellow-300 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-900 shadow-sm">
                🎮 Pusat Kontrol
              </p>
              <h1 className="mt-4 text-3xl font-black drop-shadow-md sm:text-5xl">Ruang Website!</h1>
              <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-emerald-50 sm:text-lg">
                Halo! 👋 Di sini kamu bisa ganti tulisan, gambar, dan barang jualan di website semudah main game.
                Nggak perlu nulis kode sama sekali!
              </p>
            </div>

            <div className="rounded-2xl border-2 border-emerald-300/50 bg-black/10 p-5 text-sm text-emerald-50 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">💾 Terakhir Disimpan</p>
              <p className="mt-2 text-xl font-bold">{new Date(updatedAt).toLocaleString("id-ID")}</p>
              <p className="mt-2 text-xs leading-relaxed text-emerald-100/90">
                💡 <b>Rahasia:</b> Jangan lupa selalu pencet tombol Simpan yang paling bawah kalau sudah selesai
                mengubah-ubah ya!
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/products"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/50 bg-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-emerald-800"
            >
              👀 Liat Halaman Barang
            </a>
            <a
              href="/partners"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/50 bg-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-emerald-800"
            >
              🤝 Liat Teman Kerja Sama
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="ml-auto rounded-full border-2 border-red-500 bg-red-400 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-500"
            >
              🚪 Keluar (Logout)
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => setTab("home")}
            className={`rounded-[2rem] p-5 text-left transition transform hover:-translate-y-1 ${
              tab === "home"
                ? "scale-105 border-4 border-white bg-amber-400 text-amber-950 shadow-xl"
                : "border-4 border-transparent bg-white text-stone-600 shadow-md hover:bg-amber-50"
            }`}
          >
            <p className="mb-2 text-4xl">🏠</p>
            <p className="text-xs font-black uppercase tracking-widest opacity-70">Bagian 1</p>
            <p className="mt-1 text-2xl font-black">Halaman Depan</p>
            <p className="mt-2 text-sm font-medium opacity-90">Ubah kata sambutan dan cerita keren kita di beranda.</p>
          </button>

          <button
            type="button"
            onClick={() => setTab("products")}
            className={`rounded-[2rem] p-5 text-left transition transform hover:-translate-y-1 ${
              tab === "products"
                ? "scale-105 border-4 border-white bg-sky-400 text-sky-950 shadow-xl"
                : "border-4 border-transparent bg-white text-stone-600 shadow-md hover:bg-sky-50"
            }`}
          >
            <p className="mb-2 text-4xl">🛍️</p>
            <p className="text-xs font-black uppercase tracking-widest opacity-70">Bagian 2</p>
            <p className="mt-1 text-2xl font-black">Barang Jualan</p>
            <p className="mt-2 text-sm font-medium opacity-90">
              Ada <b>{products.length} barang</b>. Mau tambah atau ubah yang mana?
            </p>
          </button>

          <button
            type="button"
            onClick={() => setTab("partners")}
            className={`rounded-[2rem] p-5 text-left transition transform hover:-translate-y-1 ${
              tab === "partners"
                ? "scale-105 border-4 border-white bg-purple-400 text-purple-950 shadow-xl"
                : "border-4 border-transparent bg-white text-stone-600 shadow-md hover:bg-purple-50"
            }`}
          >
            <p className="mb-2 text-4xl">🤝</p>
            <p className="text-xs font-black uppercase tracking-widest opacity-70">Bagian 3</p>
            <p className="mt-1 text-2xl font-black">Teman Kerja</p>
            <p className="mt-2 text-sm font-medium opacity-90">
              Ada <b>{partners.length} logo</b> perusahaan yang berteman dengan kita.
            </p>
          </button>
        </section>

        <section className="rounded-[2.5rem] border-4 border-stone-100 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-stone-100 pb-6">
            <div>
              <h2 className="text-2xl font-black text-stone-800">
                {tab === "home"
                  ? "🏠 Ngatur Halaman Depan"
                  : tab === "products"
                    ? "🛍️ Buku Daftar Barang"
                    : "🤝 Buku Daftar Teman Kerja"}
              </h2>
              <p className="mt-2 text-base font-medium text-stone-500">
                {tab === "home"
                  ? "Tinggal ketik di kotak yang kamu mau, nanti otomatis terganti!"
                  : tab === "products"
                    ? "Pilih barang di sebelah kiri, lalu ubah tulisannya di sebelah kanan."
                    : "Siapa nih teman baru kita? Masukkan nama dan logonya ya."}
              </p>
            </div>
            <div className="flex gap-2">
              {tab === "products" && (
                <button
                  type="button"
                  onClick={addProduct}
                  className="transform rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:scale-105 hover:bg-sky-600"
                >
                  ➕ Bikin Barang Baru
                </button>
              )}
              {tab === "partners" && (
                <button
                  type="button"
                  onClick={addPartner}
                  className="transform rounded-full bg-purple-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:scale-105 hover:bg-purple-600"
                >
                  ➕ Tambah Teman Baru
                </button>
              )}
            </div>
          </div>

          {tab === "home" && (
            <div className="mt-8 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 rounded-2xl bg-stone-100 p-2">
                  {[
                    { value: "hero", label: "👋 Sambutan Atas", icon: "✨" },
                    { value: "stats", label: "🏆 Prestasi & Angka", icon: "📈" },
                    { value: "creds", label: "📜 Sertifikat Kita", icon: "🥇" },
                    { value: "quality", label: "💖 Cerita Bagus", icon: "📖" },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setHomeEditorTab(item.value as HomeEditorTab)}
                      className={`flex-1 rounded-xl px-5 py-3 text-center text-sm font-bold transition sm:flex-none ${
                        homeEditorTab === item.value
                          ? "bg-white text-emerald-700 shadow-md"
                          : "text-stone-500 hover:bg-stone-200"
                      }`}
                    >
                      {item.icon} {item.label}
                    </button>
                  ))}
                </div>

                {homeEditorTab === "hero" && (
                  <div className="space-y-5 rounded-2xl border-2 border-amber-100 bg-amber-50 p-6">
                    <Field label="🎈 Tulisan Kecil Paling Atas (Contoh: Pengumuman!)">
                      <input
                        value={home.hero.badge}
                        onChange={(event) => updateHomeHero("badge", event.target.value)}
                        className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base font-medium outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
                      />
                    </Field>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Besar Banget: Judul Utama">
                        <input
                          value={home.hero.titleMain}
                          onChange={(event) => updateHomeHero("titleMain", event.target.value)}
                          className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-lg font-black outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
                        />
                      </Field>
                      <Field label="Besar Biasa: Lanjutan Judul">
                        <input
                          value={home.hero.titleSub}
                          onChange={(event) => updateHomeHero("titleSub", event.target.value)}
                          className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-lg font-black outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
                        />
                      </Field>
                    </div>
                    <Field label="Penjelasan Singkat (Bawah Judul)">
                      <input
                        value={home.hero.subheading}
                        onChange={(event) => updateHomeHero("subheading", event.target.value)}
                        className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
                      />
                    </Field>
                    <Field label="📝 Cerita Lengkapnya / Kenapa Harus Beli di Sini?">
                      <textarea
                        value={home.hero.description}
                        onChange={(event) => updateHomeHero("description", event.target.value)}
                        className="min-h-[140px] w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base leading-relaxed outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
                      />
                    </Field>
                  </div>
                )}

                {homeEditorTab === "stats" && (
                  <div className="space-y-4 rounded-2xl border-2 border-sky-100 bg-sky-50 p-6">
                    <p className="mb-4 text-sm font-medium text-stone-600">
                      Ayo tulis angka-angka hebat yang bikin orang percaya sama kita!
                    </p>
                    {home.stats.map((item, index) => (
                      <div
                        key={`home-stat-${index}`}
                        className="rounded-2xl border-2 border-sky-200 bg-white p-5 shadow-sm"
                      >
                        <div className="grid gap-4 md:grid-cols-[0.35fr_0.65fr_auto] md:items-end">
                          <Field label="Angka Hebatnya">
                            <input
                              value={item.value}
                              onChange={(event) => updateHomeStat(index, "value", event.target.value)}
                              placeholder="Contoh: 100+"
                              className="w-full rounded-xl border-2 border-stone-200 bg-stone-50 px-4 py-3 text-lg font-black outline-none transition focus:border-sky-400"
                            />
                          </Field>
                          <Field label="Itu Angka Apa?">
                            <input
                              value={item.label}
                              onChange={(event) => updateHomeStat(index, "label", event.target.value)}
                              placeholder="Contoh: Orang yang suka"
                              className="w-full rounded-xl border-2 border-stone-200 bg-stone-50 px-4 py-3 text-base outline-none transition focus:border-sky-400"
                            />
                          </Field>
                          <button
                            type="button"
                            onClick={() => removeHomeStat(index)}
                            className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-500 hover:text-white"
                          >
                            🗑️ Hapus
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addHomeStat}
                      className="w-full rounded-2xl border-4 border-dashed border-sky-300 bg-sky-100/50 px-5 py-4 text-sm font-bold text-sky-700 transition hover:bg-sky-200"
                    >
                      ➕ Bikin Angka Baru
                    </button>
                  </div>
                )}

                {homeEditorTab === "creds" && (
                  <div className="space-y-4 rounded-2xl border-2 border-purple-100 bg-purple-50 p-6">
                    <p className="mb-4 text-sm font-medium text-stone-600">
                      Unggah file PDF atau ketik tautan sertifikat yang mau dipamerin.
                    </p>
                    {home.credentials.map((item, index) => (
                      <div
                        key={`home-credential-${index}`}
                        className="rounded-2xl border-2 border-purple-200 bg-white p-5 shadow-sm"
                      >
                        <div className="space-y-4">
                          <Field label="Nama Tombol Sertifikatnya">
                            <input
                              value={item.label}
                              onChange={(event) => updateHomeCredential(index, "label", event.target.value)}
                              className="w-full rounded-xl border-2 border-stone-200 bg-stone-50 px-4 py-3 text-base font-bold outline-none transition focus:border-purple-400"
                            />
                          </Field>
                          <Field label="Alamat / Link Dokumennya">
                            <div className="flex gap-2">
                              <input
                                value={item.href}
                                onChange={(event) => updateHomeCredential(index, "href", event.target.value)}
                                className="flex-1 rounded-xl border-2 border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-purple-400"
                              />
                            </div>
                          </Field>
                          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-3">
                            <span className="text-sm font-bold text-purple-800">Atau pilih file dari laptop:</span>
                            <CloudinaryUploadButton
                              label="📤 Upload Dokumen"
                              accept=".pdf,.doc,.docx,.ppt,.pptx"
                              folder="nmp/docs"
                              onUploaded={(url) => updateHomeCredential(index, "href", url)}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeHomeCredential(index)}
                            className="w-full rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-500 hover:text-white"
                          >
                            🗑️ Hapus Sertifikat Ini
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addHomeCredential}
                      className="w-full rounded-2xl border-4 border-dashed border-purple-300 bg-purple-100/50 px-5 py-4 text-sm font-bold text-purple-700 transition hover:bg-purple-200"
                    >
                      ➕ Bikin Sertifikat Baru
                    </button>
                  </div>
                )}

                {homeEditorTab === "quality" && (
                  <div className="space-y-5 rounded-2xl border-2 border-emerald-100 bg-emerald-50 p-6">
                    <Field label="📖 Judul Cerita">
                      <input
                        value={home.quality.title}
                        onChange={(event) => updateHomeQuality("title", event.target.value)}
                        className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-lg font-black outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20"
                      />
                    </Field>
                    <Field label="Isi Ceritanya Dong!">
                      <textarea
                        value={home.quality.description}
                        onChange={(event) => updateHomeQuality("description", event.target.value)}
                        className="min-h-[160px] w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base leading-relaxed outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20"
                      />
                    </Field>
                    <div className="space-y-4 rounded-2xl border-2 border-emerald-200 bg-white p-5">
                      <p className="text-sm font-bold text-emerald-800">🎥 Link Video Keren Kita</p>
                      {home.quality.videoUrls.map((videoUrl, index) => (
                        <div
                          key={`home-video-${index}`}
                          className="space-y-3 rounded-xl border-2 border-stone-100 bg-stone-50 p-4"
                        >
                          <input
                            value={videoUrl}
                            onChange={(event) => updateHomeVideo(index, event.target.value)}
                            placeholder="Ketik alamat videonya di sini..."
                            className="w-full rounded-xl border-2 border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400"
                          />
                          <div className="flex flex-wrap items-center gap-2">
                            <CloudinaryUploadButton
                              label="📤 Upload Videonya"
                              accept="video/*"
                              folder="nmp/videos"
                              onUploaded={(url) => updateHomeVideo(index, url)}
                            />
                            <button
                              type="button"
                              onClick={() => removeHomeVideo(index)}
                              className="rounded-xl border-2 border-red-200 bg-white px-4 py-2 text-xs font-bold text-red-600 transition hover:bg-red-500 hover:text-white"
                            >
                              🗑️ Hapus
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addHomeVideo}
                        className="w-full rounded-xl border-4 border-dashed border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
                      >
                        ➕ Tambah Kolom Video Baru
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <aside className="flex flex-col items-center rounded-[2.5rem] border-4 border-stone-200 bg-stone-100 p-6 shadow-inner">
                <p className="mb-4 rounded-full bg-white px-4 py-2 text-sm font-black text-stone-500 shadow-sm">
                  📱 Kayak Gini Nanti Keliatannya di HP
                </p>
                <div className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2.5rem] border-[8px] border-stone-800 bg-white shadow-2xl">
                  <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-stone-800" />
                  <div className="h-[580px] overflow-y-auto">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-800 px-5 pb-8 pt-10 text-center text-white">
                      <span className="inline-block rounded-full border border-yellow-300/50 bg-yellow-300/20 px-3 py-1 text-[10px] font-bold text-yellow-100">
                        {home.hero.badge || "PENGUMUMAN"}
                      </span>
                      <h3 className="mt-4 text-2xl font-black leading-tight drop-shadow-md">
                        {home.hero.titleMain || "Judul Utama"}
                      </h3>
                      <p className="mt-2 text-sm font-bold text-emerald-100">{home.hero.titleSub || "Judul Tambahan"}</p>
                      <p className="mt-3 rounded-lg bg-black/10 p-2 text-xs font-medium text-emerald-50/90">
                        {home.hero.subheading || "Penjelasan Singkat"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 bg-stone-50 p-4">
                      {home.stats.map((item, index) => (
                        <div
                          key={`home-preview-stat-${index}`}
                          className="rounded-2xl border border-stone-100 bg-white p-3 text-center shadow-sm"
                        >
                          <p className="text-xl font-black text-sky-600">{item.value || "0"}</p>
                          <p className="mt-1 text-[10px] font-bold text-stone-500">{item.label || "Keterangan"}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-stone-100 bg-white p-5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">💖 Cerita Bagus Kita</p>
                      <p className="mt-2 text-lg font-black text-stone-800">{home.quality.title || "Judul Cerita"}</p>
                      <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-stone-600">
                        {home.quality.description || "Isi ceritanya akan muncul di sini..."}
                      </p>
                    </div>
                    <div className="bg-emerald-950 p-5 text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">📜 Sertifikat Keren</p>
                      <div className="mt-3 space-y-2">
                        {home.credentials.map((item, index) => (
                          <div
                            key={`home-preview-credential-${index}`}
                            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center text-xs font-bold"
                          >
                            📄 {item.label || "Dokumen"}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {tab !== "home" && (
            <div className="mt-8 space-y-6">
              <div className="rounded-[2rem] border-4 border-stone-100 bg-stone-50 p-5">
                <p className="mb-4 text-sm font-bold text-stone-600">
                  {tab === "products"
                    ? "👉 Klik barang mana yang mau diedit:"
                    : "👉 Klik teman kerja mana yang mau diedit:"}
                </p>
                <div className="custom-scrollbar flex gap-3 overflow-x-auto pb-4">
                  {tab === "products"
                    ? products.map((product, index) => (
                        <button
                          key={`product-editor-select-${index}`}
                          type="button"
                          onClick={() => setSelectedProductIndex(index)}
                          className={`min-w-[140px] flex-shrink-0 rounded-2xl border-2 px-4 py-3 text-left transition transform hover:-translate-y-1 ${
                            selectedProductIndex === index
                              ? "scale-105 border-sky-400 bg-sky-100 shadow-md"
                              : "border-stone-200 bg-white hover:border-stone-300"
                          }`}
                        >
                          <p className="line-clamp-1 font-bold text-stone-900">{product.title || "Tanpa Nama"}</p>
                          <p className="mt-1 text-xs text-stone-500">{product.size || "Ukuran?"}</p>
                        </button>
                      ))
                    : partners.map((partner, index) => (
                        <button
                          key={`partner-editor-select-${index}`}
                          type="button"
                          onClick={() => setSelectedPartnerIndex(index)}
                          className={`min-w-[140px] flex-shrink-0 rounded-2xl border-2 px-4 py-3 text-left transition transform hover:-translate-y-1 ${
                            selectedPartnerIndex === index
                              ? "scale-105 border-purple-400 bg-purple-100 shadow-md"
                              : "border-stone-200 bg-white hover:border-stone-300"
                          }`}
                        >
                          <p className="line-clamp-1 font-bold text-stone-900">{partner.name || "Tanpa Nama"}</p>
                          <p className="mt-1 text-xs text-stone-500">{partner.sector || "Bidang?"}</p>
                        </button>
                      ))}
                </div>
              </div>

              <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
                <div className="space-y-4">
                  {tab === "products"
                    ? products.map((product, index) =>
                        index !== selectedProductIndex ? null : (
                          <article
                            key={`product-editor-${index}`}
                            className="rounded-[2.5rem] border-4 border-sky-100 bg-white p-6 shadow-xl sm:p-8"
                          >
                            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b-2 border-stone-100 pb-5">
                              <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl font-black text-sky-600">
                                  {index + 1}
                                </div>
                                <h3 className="text-2xl font-black text-stone-800">{product.title || "Barang Baru"}</h3>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => duplicateProduct(index)}
                                  className="rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-600 transition hover:bg-stone-200"
                                >
                                  👯‍♂️ Gandakan
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeProduct(index)}
                                  className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-500 hover:text-white"
                                >
                                  🗑️ Hapus
                                </button>
                              </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                              <div className="hidden">
                                <input value={product.id} readOnly />
                              </div>

                              <Field label="🛍️ Nama Barangnya Apa?">
                                <input
                                  value={product.title}
                                  onChange={(event) => updateProduct(index, { title: event.target.value })}
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-lg font-bold outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                                />
                              </Field>

                              <Field label="Kategori Kelompok">
                                <select
                                  value={product.category}
                                  onChange={(event) =>
                                    updateProduct(index, { category: event.target.value as ProductCategory })
                                  }
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                                >
                                  {categoryOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </Field>

                              <Field label="⚖️ Berat / Ukurannya Berapa? (contoh: 5 KG)">
                                <input
                                  value={product.size}
                                  onChange={(event) => updateProduct(index, { size: event.target.value })}
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                                />
                              </Field>

                              <Field label="🖼️ Gambar Fotonya">
                                <div className="flex flex-col gap-3">
                                  <input
                                    value={product.image}
                                    onChange={(event) => updateProduct(index, { image: event.target.value })}
                                    placeholder="Alamat gambar akan otomatis terisi..."
                                    readOnly
                                    className="w-full rounded-2xl border-2 border-stone-100 bg-stone-50 px-5 py-3 text-sm text-stone-500 outline-none"
                                  />
                                  <div className="w-full rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50 p-4 text-center">
                                    <CloudinaryUploadButton
                                      label="📸 Pilih Fotonya di Sini"
                                      accept="image/*"
                                      folder="nmp/products"
                                      onUploaded={(url) => updateProduct(index, { image: url })}
                                    />
                                  </div>
                                </div>
                              </Field>

                              <Field label="🏷️ Pita Tulisan Kecil (contoh: Paling Laku!)">
                                <input
                                  value={product.badge}
                                  onChange={(event) => updateProduct(index, { badge: event.target.value })}
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                                />
                              </Field>

                              <Field label="🎨 Warna Tulisan Kecilnya">
                                <select
                                  value={product.badgeColor}
                                  onChange={(event) => updateProduct(index, { badgeColor: event.target.value })}
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                                >
                                  {badgeColorOptions.map((color) => (
                                    <option key={color.value} value={color.value}>
                                      {color.label}
                                    </option>
                                  ))}
                                </select>
                              </Field>

                              <Field label="🎗️ Pita Emas di Pojok (Kosongin kalau nggak ada)">
                                <input
                                  value={product.ribbon ?? ""}
                                  onChange={(event) =>
                                    updateProduct(index, { ribbon: event.target.value.trim() || undefined })
                                  }
                                  placeholder="Contoh: Beli 1 Gratis 1"
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                                />
                              </Field>
                            </div>

                            <div className="mt-6">
                              <Field label="📝 Ceritain dong tentang barang ini, rasanya gimana?">
                                <textarea
                                  value={product.description}
                                  onChange={(event) => updateProduct(index, { description: event.target.value })}
                                  className="min-h-[140px] w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base leading-relaxed outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-400/20"
                                />
                              </Field>
                            </div>
                          </article>
                        ),
                      )
                    : partners.map((partner, index) =>
                        index !== selectedPartnerIndex ? null : (
                          <article
                            key={`partner-editor-${index}`}
                            className="rounded-[2.5rem] border-4 border-purple-100 bg-white p-6 shadow-xl sm:p-8"
                          >
                            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b-2 border-stone-100 pb-5">
                              <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl font-black text-purple-600">
                                  {index + 1}
                                </div>
                                <h3 className="text-2xl font-black text-stone-800">{partner.name || "Teman Baru"}</h3>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => duplicatePartner(index)}
                                  className="rounded-full bg-stone-100 px-4 py-2 text-sm font-bold text-stone-600 transition hover:bg-stone-200"
                                >
                                  👯‍♂️ Gandakan
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removePartner(index)}
                                  className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-500 hover:text-white"
                                >
                                  🗑️ Hapus
                                </button>
                              </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                              <Field label="🧑‍🤝‍🧑 Siapa Nama Perusahaannya?">
                                <input
                                  value={partner.name}
                                  onChange={(event) => updatePartner(index, { name: event.target.value })}
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-lg font-bold outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20"
                                />
                              </Field>

                              <Field label="🏭 Mereka Jual Apa? (Restoran/Hotel/Toko)">
                                <input
                                  value={partner.sector}
                                  onChange={(event) => updatePartner(index, { sector: event.target.value })}
                                  className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-base outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20"
                                />
                              </Field>

                              <div className="md:col-span-2">
                                <Field label="🖼️ Logo Perusahaannya">
                                  <div className="flex flex-col gap-3">
                                    <input
                                      value={partner.logo}
                                      readOnly
                                      placeholder="Alamat gambar otomatis terisi..."
                                      className="w-full rounded-2xl border-2 border-stone-100 bg-stone-50 px-5 py-3 text-sm text-stone-500 outline-none"
                                    />
                                    <div className="w-full rounded-2xl border-2 border-dashed border-purple-300 bg-purple-50 p-4 text-center">
                                      <CloudinaryUploadButton
                                        label="📸 Pilih Gambar Logonya di Sini"
                                        accept="image/*"
                                        folder="nmp/partners"
                                        onUploaded={(url) => updatePartner(index, { logo: url })}
                                      />
                                    </div>
                                  </div>
                                </Field>
                              </div>
                            </div>
                          </article>
                        ),
                      )}
                </div>

                <aside className="flex flex-col items-center rounded-[2.5rem] border-4 border-stone-200 bg-stone-100 p-6 shadow-inner">
                  <p className="mb-4 rounded-full bg-white px-4 py-2 text-sm font-black text-stone-500 shadow-sm">
                    📱 Keliatannya di HP Nanti
                  </p>

                  {tab === "products" && products[selectedProductIndex] && (
                    <div className="group relative mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border-2 border-stone-200 bg-white shadow-xl transition hover:border-sky-300">
                      {products[selectedProductIndex].ribbon && (
                        <div className="absolute -right-12 top-4 z-10 rotate-45 bg-yellow-400 px-12 py-1 text-[10px] font-black uppercase text-yellow-950 shadow-md">
                          {products[selectedProductIndex].ribbon}
                        </div>
                      )}

                      <div className="relative flex h-48 items-center justify-center bg-stone-50 p-4">
                        {products[selectedProductIndex].image ? (
                          <img
                            src={products[selectedProductIndex].image}
                            alt={products[selectedProductIndex].title}
                            className="max-h-full max-w-full object-contain drop-shadow-md transition duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <span className="text-4xl">📸</span>
                        )}
                      </div>

                      <div className="border-t-2 border-stone-100 p-5">
                        <div className="mb-2 flex items-start justify-between">
                          <p
                            className={`rounded-md bg-stone-100 px-2 py-1 text-[10px] font-black uppercase tracking-widest ${products[selectedProductIndex].badgeColor}`}
                          >
                            {products[selectedProductIndex].category}
                          </p>
                        </div>
                        <h3 className="text-xl font-black leading-tight text-stone-800">
                          {products[selectedProductIndex].title || "Tanpa Nama"}
                        </h3>
                        <p className="mt-1 text-xs font-bold text-sky-600">{products[selectedProductIndex].badge}</p>
                        <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-stone-500">
                          {products[selectedProductIndex].description || "Ceritanya masih kosong nih..."}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
                          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                            ⚖️ {products[selectedProductIndex].size || "0 KG"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {tab === "partners" && partners[selectedPartnerIndex] && (
                    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border-2 border-stone-200 bg-white p-6 text-center shadow-xl">
                      <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-2xl border-2 border-stone-100 bg-stone-50 p-3 shadow-inner">
                        {partners[selectedPartnerIndex].logo ? (
                          <img
                            src={partners[selectedPartnerIndex].logo}
                            alt={partners[selectedPartnerIndex].name}
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <span className="text-3xl">🏢</span>
                        )}
                      </div>
                      <h3 className="text-lg font-black text-stone-800">
                        {partners[selectedPartnerIndex].name || "Nama Perusahaan"}
                      </h3>
                      <p className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                        {partners[selectedPartnerIndex].sector || "Bidang Usaha"}
                      </p>
                    </div>
                  )}
                </aside>
              </div>
            </div>
          )}
        </section>

        <section className="sticky bottom-2 z-50 mx-auto flex max-w-5xl flex-col gap-3 rounded-[1.75rem] border-4 border-stone-700 bg-stone-900 p-4 shadow-2xl sm:bottom-4 sm:gap-4 sm:rounded-[2.5rem] sm:p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-800 text-xl sm:h-12 sm:w-12 sm:text-2xl">🤖</div>
            <div>
              <p className="text-sm font-bold text-white sm:text-base">{status}</p>
              <p className="mt-1 text-xs leading-relaxed text-stone-400 sm:text-sm">
                Kalo udah beres, jangan lupa dipencet tombol di samping ya! 👉
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="w-full flex-shrink-0 rounded-full bg-amber-400 px-5 py-3 text-xs font-black text-amber-950 shadow-[0_0_20px_rgba(251,191,36,0.4)] transition hover:scale-105 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
          >
            {saving ? "⏳ Tunggu Ya..." : "✨ SIMPAN SEMUA & TAMPILKAN! ✨"}
          </button>
        </section>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-stone-700">{label}</span>
      {children}
    </label>
  );
}
