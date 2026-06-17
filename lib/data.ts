export type StatusGizi = "Normal" | "Stunting"

export type ImunisasiItem = {
  nama: string
  sudah: boolean
}

export type GrowthPoint = {
  label: string
  berat: number
  tinggi: number
}

export type Anak = {
  id: string
  nama: string
  jenisKelamin: "Laki-laki" | "Perempuan"
  tempatTanggalLahir: string
  tanggalLahir: string
  usia: string
  beratBadan: number
  tinggiBadan: number
  lingkarKepala: number
  status: StatusGizi
  catatan: string
  saran: string
  avatarBg: string
  grafik: GrowthPoint[]
  imunisasi: ImunisasiItem[]
}

export const dataAnak: Anak[] = [
  {
    id: "lily-faresha",
    nama: "Lily Faresha",
    jenisKelamin: "Perempuan",
    tempatTanggalLahir: "Jakarta, 12 Februari 2022",
    tanggalLahir: "12 Februari 2022",
    usia: "4 Tahun 3 Bulan",
    beratBadan: 15.8,
    tinggiBadan: 101,
    lingkarKepala: 50,
    status: "Normal",
    catatan: "Anak dalam kondisi sehat, nafsu makan baik, tidak ada keluhan.",
    saran: "Berikan makanan bergizi seimbang dan stimulasi perkembangan.",
    avatarBg: "oklch(0.85 0.07 350)",
    grafik: [
      { label: "6 bln", berat: 6, tinggi: 65 },
      { label: "12 bln", berat: 8, tinggi: 74 },
      { label: "18 bln", berat: 10, tinggi: 81 },
      { label: "24 bln", berat: 12, tinggi: 87 },
      { label: "30 bln", berat: 15.8, tinggi: 90 },
    ],
    imunisasi: [
      { nama: "BCG", sudah: true },
      { nama: "Polio 1", sudah: true },
      { nama: "DPT-HB-Hib 1", sudah: true },
      { nama: "Polio 2", sudah: true },
      { nama: "DPT-HB-Hib 2", sudah: true },
      { nama: "Campak", sudah: false },
    ],
  },
  {
    id: "kayla-azura",
    nama: "Kayla Azura",
    jenisKelamin: "Perempuan",
    tempatTanggalLahir: "Bali, 5 Januari 2022",
    tanggalLahir: "5 Januari 2022",
    usia: "4 Tahun 4 Bulan",
    beratBadan: 10,
    tinggiBadan: 95,
    lingkarKepala: 46,
    status: "Stunting",
    catatan:
      "Berikan protein hewani (telur, ikan, daging) setiap hari, rutin cek ke dokter Puskesmas.",
    saran:
      "Jaga kebersihan agar anak tidak mudah sakit, dan sering ajak bermain mengobrol untuk perkembangan otaknya.",
    avatarBg: "oklch(0.85 0.07 350)",
    grafik: [
      { label: "6 bln", berat: 5, tinggi: 64 },
      { label: "12 bln", berat: 6.7, tinggi: 71 },
      { label: "18 bln", berat: 7.8, tinggi: 80 },
      { label: "24 bln", berat: 8.4, tinggi: 84 },
      { label: "30 bln", berat: 9.4, tinggi: 90 },
    ],
    imunisasi: [
      { nama: "BCG", sudah: true },
      { nama: "Polio 1", sudah: true },
      { nama: "DPT-HB-Hib 1", sudah: true },
      { nama: "Polio 2", sudah: true },
      { nama: "DPT-HB-Hib 2", sudah: true },
      { nama: "Campak", sudah: false },
      { nama: "PCV (Pneumokokus)", sudah: false },
      { nama: "Rotavirus", sudah: false },
      { nama: "Influenza", sudah: false },
    ],
  },
  {
    id: "arsen-mahendra",
    nama: "Arsen Mahendra",
    jenisKelamin: "Laki-laki",
    tempatTanggalLahir: "Jakarta, 9 Januari 2023",
    tanggalLahir: "9 Januari 2023",
    usia: "3 Tahun 4 Bulan",
    beratBadan: 11.2,
    tinggiBadan: 84,
    lingkarKepala: 47,
    status: "Stunting",
    catatan:
      "Berikan protein hewani (telur, ikan, daging) setiap hari, rutin cek ke dokter Puskesmas.",
    saran:
      "Jaga kebersihan agar anak tidak mudah sakit, dan sering ajak bermain mengobrol untuk perkembangan otaknya.",
    avatarBg: "oklch(0.85 0.12 95)",
    grafik: [
      { label: "6 bln", berat: 6, tinggi: 66 },
      { label: "12 bln", berat: 7.8, tinggi: 73 },
      { label: "18 bln", berat: 8.8, tinggi: 78 },
      { label: "24 bln", berat: 10, tinggi: 81 },
      { label: "30 bln", berat: 11.2, tinggi: 84 },
    ],
    imunisasi: [
      { nama: "BCG", sudah: true },
      { nama: "Polio 1", sudah: true },
      { nama: "DPT-HB-Hib 1", sudah: true },
      { nama: "Polio 2", sudah: true },
      { nama: "DPT-HB-Hib 2", sudah: true },
      { nama: "Campak", sudah: false },
      { nama: "PCV (Pneumokokus)", sudah: false },
      { nama: "Rotavirus", sudah: false },
      { nama: "Influenza", sudah: false },
    ],
  },
  {
    id: "ezra-alfarez",
    nama: "Ezra Alfarez",
    jenisKelamin: "Laki-laki",
    tempatTanggalLahir: "Jakarta, 2 November 2025",
    tanggalLahir: "2 November 2025",
    usia: "7 Bulan",
    beratBadan: 9.8,
    tinggiBadan: 70,
    lingkarKepala: 43,
    status: "Normal",
    catatan: "Anak dalam kondisi sehat, nafsu makan baik. Tidak ada keluhan.",
    saran: "Berikan makanan bergizi seimbang dan stimulasi perkembangan.",
    avatarBg: "oklch(0.85 0.08 240)",
    grafik: [
      { label: "1 bln", berat: 4.2, tinggi: 53 },
      { label: "3 bln", berat: 6, tinggi: 57 },
      { label: "4 bln", berat: 7.6, tinggi: 63 },
      { label: "7 bln", berat: 9.8, tinggi: 70 },
    ],
    imunisasi: [
      { nama: "BCG", sudah: true },
      { nama: "Polio 1", sudah: true },
      { nama: "DPT-HB-Hib 1", sudah: true },
      { nama: "Polio 2", sudah: true },
      { nama: "DPT-HB-Hib 2", sudah: true },
      { nama: "Campak", sudah: false },
    ],
  },
  {
    id: "kael-ravandra",
    nama: "Kael Ravandra",
    jenisKelamin: "Laki-laki",
    tempatTanggalLahir: "Bandung, 12 Mei 2025",
    tanggalLahir: "12 Mei 2025",
    usia: "1 Tahun",
    beratBadan: 12,
    tinggiBadan: 85,
    lingkarKepala: 51,
    status: "Normal",
    catatan: "Anak dalam kondisi sehat, nafsu makan baik, tidak ada keluhan.",
    saran: "Berikan makanan bergizi seimbang dan stimulasi perkembangan.",
    avatarBg: "oklch(0.85 0.08 240)",
    grafik: [
      { label: "1 bln", berat: 4.2, tinggi: 53 },
      { label: "3 bln", berat: 5.6, tinggi: 57 },
      { label: "6 bln", berat: 7.6, tinggi: 63 },
      { label: "9 bln", berat: 9.8, tinggi: 70 },
      { label: "12 bln", berat: 12, tinggi: 85 },
    ],
    imunisasi: [
      { nama: "BCG", sudah: true },
      { nama: "Polio 1", sudah: true },
      { nama: "DPT-HB-Hib 1", sudah: true },
      { nama: "Polio 2", sudah: true },
      { nama: "DPT-HB-Hib 2", sudah: true },
      { nama: "Campak", sudah: false },
    ],
  },
]

export type Kader = {
  no: number
  nama: string
  alamat: string
  telepon: string
  pekerjaan: string
  umur: string
}

export const dataKader: Kader[] = [
  { no: 1, nama: "Nindya", alamat: "Jl. Mawar Blok C/10", telepon: "085711223344", pekerjaan: "Pegawai Negeri Sipil", umur: "25 Tahun" },
  { no: 2, nama: "Hafizh", alamat: "Jl. Mawar Blok E/5", telepon: "081299887766", pekerjaan: "Pegawai Negeri Sipil", umur: "30 Tahun" },
  { no: 3, nama: "Hesti", alamat: "Jl. Mawar Blok D/11", telepon: "081988776655", pekerjaan: "Pegawai Negeri Sipil", umur: "26 Tahun" },
  { no: 4, nama: "Nayla", alamat: "Jl. Mawar Blok C/2", telepon: "082255443321", pekerjaan: "Pegawai Negeri Sipil", umur: "25 Tahun" },
  { no: 5, nama: "Nabila", alamat: "Jl. Mawar Blok D/5", telepon: "087785559173", pekerjaan: "Pegawai Negeri Sipil", umur: "27 Tahun" },
]

export type StatusKegiatan = "SUCCESS" | "IN PROGRESS"

export type Kegiatan = {
  id: string
  tanggal: string
  namaKegiatan: string
  jenis: string
  lokasi: string
  jumlahPeserta: number
  kaderBertugas: string
  deskripsi: string
  status: StatusKegiatan
}

export const dataKegiatan: Kegiatan[] = [
  {
    id: "penimbangan-balita",
    tanggal: "2 April 2026",
    namaKegiatan: "Penimbangan Balita",
    jenis: "Penimbangan",
    lokasi: "Posyandu Ceria, Jl Mawar",
    jumlahPeserta: 5,
    kaderBertugas: "Hestiana, Nabila",
    deskripsi:
      "Kegiatan penimbangan rutin bulanan balita di posyandu ceria. Semua balita hadir dan kegiatan berjalan lancar.",
    status: "SUCCESS",
  },
  {
    id: "penyuluhan-gizi",
    tanggal: "9 April 2026",
    namaKegiatan: "Penyuluhan Gizi Anak",
    jenis: "Penyuluhan Gizi",
    lokasi: "Posyandu Ceria, Jl Mawar",
    jumlahPeserta: 5,
    kaderBertugas: "Nayla",
    deskripsi:
      "Kegiatan penyuluhan gizi rutin bulanan balita di posyandu ceria. Semua balita hadir dan kegiatan berjalan lancar.",
    status: "SUCCESS",
  },
  {
    id: "imunisasi-balita",
    tanggal: "16 April 2026",
    namaKegiatan: "Imunisasi Balita",
    jenis: "Imunisasi",
    lokasi: "Posyandu Ceria, Jl Mawar",
    jumlahPeserta: 3,
    kaderBertugas: "Nindya",
    deskripsi:
      "Kegiatan imunisasi rutin bulanan balita di Posyandu Ceria berjalan lancar. Sebagian balita hadir, namun beberapa balita tidak hadir dan akan dijadwalkan kembali untuk imunisasi.",
    status: "IN PROGRESS",
  },
  {
    id: "pemberian-vitamin",
    tanggal: "23 April 2026",
    namaKegiatan: "Pemberian Vitamin",
    jenis: "Pemberian Vitamin",
    lokasi: "Posyandu Ceria, Jl Mawar",
    jumlahPeserta: 5,
    kaderBertugas: "Hafizh",
    deskripsi:
      "Kegiatan pemberian vitamin rutin bulanan balita di posyandu ceria. Semua balita hadir dan kegiatan berjalan lancar.",
    status: "SUCCESS",
  },
]

export const dashboardStats = {
  totalAnak: 5,
  normal: 3,
  stunting: 2,
  imunisasiLengkap: 85,
}

export const statusKesehatanTrend = [
  { bulan: "Jan", normal: 40, stunting: 60 },
  { bulan: "Feb", normal: 45, stunting: 55 },
  { bulan: "Mar", normal: 50, stunting: 50 },
  { bulan: "Apr", normal: 58, stunting: 42 },
  { bulan: "Mei", normal: 75, stunting: 30 },
  { bulan: "Jun", normal: 90, stunting: 20 },
]

export const profilPosyandu = {
  nama: "Posyandu Ceria",
  telepon: "+62 89782224197",
  email: "posyanduceria@gmail.com",
  alamat:
    "Gang Belimbing, RT 03/RW 05, Kelurahan Cipayung, Kecamatan Cipayung, Kota Depok, Jawa Barat 16437, Indonesia.",
  tentang: [
    "Posyandu Ceria merupakan pusat pelayanan kesehatan masyarakat yang berfokus pada kesehatan dan tumbuh kembang balita. Kami hadir untuk membantu para orang tua dalam memantau perkembangan anak sejak dini melalui pelayanan kesehatan yang rutin, ramah, dan edukatif.",
    "Dengan dukungan kader posyandu dan tenaga kesehatan, Posyandu Ceria berkomitmen menciptakan generasi anak yang sehat, aktif, cerdas, dan ceria.",
  ],
  layanan: [
    "Penimbangan berat badan dan pengukuran tinggi badan balita",
    "Pemantauan tumbuh kembang anak",
    "Imunisasi dasar lengkap",
    "Pemberian vitamin dan makanan tambahan",
    "Konsultasi kesehatan dan gizi balita",
    "Penyuluhan kesehatan anak dan pola asuh sehat",
    "Pemantauan pencegahan stunting",
  ],
}
