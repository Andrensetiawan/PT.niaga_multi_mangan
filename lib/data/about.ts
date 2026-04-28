import { localized, type LocalizedText } from "../localized";

export interface AboutPageContent {
  aboutBadge: LocalizedText;
  companyName: LocalizedText;
  paragraphs: [LocalizedText, LocalizedText, LocalizedText];
  award: LocalizedText;
  vision: LocalizedText;
  visionTitle: LocalizedText;
  visionDesc: LocalizedText;
  mission: LocalizedText;
  missionTitle: LocalizedText;
  missionList: [LocalizedText, LocalizedText, LocalizedText];
  machineBadge: LocalizedText;
  machineTitle: LocalizedText;
  machineDesc: LocalizedText;
  machine1Subtitle: LocalizedText;
  machine1Desc: LocalizedText;
  machine2Subtitle: LocalizedText;
  machine2Desc: LocalizedText;
  qcBadge: LocalizedText;
  qcTitle: LocalizedText;
  qcDesc: LocalizedText;
  qc1: LocalizedText;
  qc2: LocalizedText;
  qc3: LocalizedText;
  qc4: LocalizedText;
  highlight1: LocalizedText;
  highlight2: LocalizedText;
}

export const DEFAULT_ABOUT_CONTENT: AboutPageContent = {
  aboutBadge: localized("TENTANG PERUSAHAAN", "ABOUT THE COMPANY"),
  companyName: localized("PT Niaga Multi Pangan", "PT Niaga Multi Pangan"),
  paragraphs: [
    localized(
      "PT Niaga Multi Pangan merupakan perusahaan nasional yang bergerak di bidang perdagangan dan distribusi produk pangan. Perusahaan ini mulai aktif beroperasi pada tahun 2020, dengan fokus utama pada penyediaan beras berkualitas bagi pasar Indonesia.",
      "PT Niaga Multi Pangan is an Indonesian company focused on food trading and distribution, operating since 2020 with a primary focus on quality rice supply.",
    ),
    localized(
      "Pada tahap awal, PT Niaga Multi Pangan memulai kegiatan usahanya dengan menyuplai beras ke berbagai supermarket, sebagai upaya menghadirkan produk beras berkualitas yang mudah dijangkau oleh masyarakat.",
      "In the early stage, the company supplied rice to supermarkets and later expanded to HORECA and Japanese restaurants requiring high quality standards.",
    ),
    localized(
      "PT Niaga Multi Pangan juga merupakan distributor tunggal pemegang hak merek untuk beras khusus KYOHIKARI serta produk makanan Jepang premium dengan merek HIKARU. Dengan dukungan tim profesional, etika kerja yang kuat, serta komitmen terhadap kualitas dan keunggulan produk, perusahaan terus berupaya memberikan pelayanan terbaik demi tercapainya kepuasan pelanggan.",
      "PT Niaga Multi Pangan is also the exclusive rights holder and distributor for KYOHIKARI specialty rice and premium Japanese food products under HIKARU. With professional team support, strong work ethics, and commitment to product quality and excellence, the company continuously strives to deliver the best service for customer satisfaction.",
    ),
  ],
  award: localized(
    "Hanya butiran terbaik yang masuk ke kemasan kami.",
    "Only the best grains make it into our packaging.",
  ),
  vision: localized("Visi", "Vision"),
  visionTitle: localized(
    "mendukung program ketahanan dan kedaulatan pangan nasional",
    "Supporting National Food Security and Sovereignty",
  ),
  visionDesc: localized(
    "Kami berkomitmen untuk menjadi bagian penting dalam menjaga stabilitas pasokan pangan berkualitas bagi masyarakat Indonesia.",
    "We are committed to playing a key role in maintaining stable access to quality food supply in Indonesia.",
  ),
  mission: localized("Misi", "Mission"),
  missionTitle: localized(
    "berfokus pada penyediaan produk berkualitas, efisiensi rantai pasok dan peningkatan nilai tambah",
    "Focused on quality products, supply-chain efficiency, and added value",
  ),
  missionList: [
    localized("Penyediaan produk berkualitas", "Deliver quality products"),
    localized("Efisiensi rantai pasok", "Optimize supply-chain efficiency"),
    localized("Peningkatan nilai tambah", "Create added value"),
  ],
  machineBadge: localized("Alat & Mesin", "Equipment & Machines"),
  machineTitle: localized("Infrastruktur Produksi PT Niaga Multi Pangan", "PT Niaga Multi Pangan Production Infrastructure"),
  machineDesc: localized(
    "Setiap batch Kyohikari dan Hikaru melalui rangkaian mesin modern agar hasil sortir bersih, pengemasan cepat, dan standar higienitas tetap konsisten.",
    "Each Kyohikari and Hikaru batch passes through a modern processing chain for clean sorting and consistent hygiene standards.",
  ),
  machine1Subtitle: localized("Untuk proses produksi beras", "For rice production process"),
  machine1Desc: localized(
    "Menggunakan mesin sortir terbaik di kelasnya untuk menjaga konsistensi warna dan kualitas beras.",
    "Uses top-class sorting technology to maintain color consistency and grain quality.",
  ),
  machine2Subtitle: localized("Menjaga presisi filling", "Maintaining filling precision"),
  machine2Desc: localized(
    "Unit timbang otomatis yang mengukur berat beras secara akurat dan konsisten demi efisiensi lini pengemasan.",
    "Automatic weighing unit that measures rice weight accurately for efficient packaging lines.",
  ),
  qcBadge: localized("Quality Control Roadmap", "Quality Control Roadmap"),
  qcTitle: localized("QC multi-layer untuk batch Kyohikari & Hikaru", "Multi-layer QC for Kyohikari & Hikaru batches"),
  qcDesc: localized(
    "Setiap tahap tercatat di lembar QC digital sehingga partner tinggal meminta log untuk audit internal.",
    "Each stage is recorded in digital QC logs for transparent internal audits.",
  ),
  qc1: localized(
    "Setiap panen diuji kadar air dan broken rice menggunakan moisture meter industri.",
    "Each harvest is tested for moisture and broken-rice ratio using industry-grade tools.",
  ),
  qc2: localized(
    "Sensor RGB dan UV menolak butir rusak sehingga head rice ratio terjaga.",
    "RGB and UV sensors reject damaged grains to maintain head-rice ratio.",
  ),
  qc3: localized(
    "Magnetic trap dan x-ray sampling harian menjauhkan kontaminan logam.",
    "Magnetic trap and daily x-ray sampling reduce contamination risk.",
  ),
  qc4: localized(
    "Sertifikat analisa (COA) diterbitkan untuk setiap batch sebelum distribusi.",
    "Certificate of Analysis (COA) is issued for each batch before distribution.",
  ),
  highlight1: localized("Mulai Beroperasi", "Operating Since"),
  highlight2: localized("Quality Control", "Quality Control"),
};