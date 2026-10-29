# Portofolio Muhammad Rizky D

Website portofolio pribadi Muhammad Rizky D (Kyy), Backend & Frontend · UI/UX Developer di DealTech. Satu halaman statis yang merangkum profil, keahlian, proyek, dan pengalaman, dengan isi yang diambil dari README profil GitHub.

Tata letak dan warna mengikuti gambar referensi [`../assets/developer-x-reference.webp`](../assets/developer-x-reference.webp). Ukuran teks, jarak, dan padding section disalin dari landing DealTech (Tech.Mudahdeal.Com).

## Features

- [x] Hero: nama, foto, ringkasan tentang & karya, tautan sosial
- [x] Tentang: perkenalan, statistik, dan baris "Pernah bekerja di"
- [x] Keahlian: carousel kartu dengan tombol geser, plus stack harian
- [x] Proyek: kartu proyek open source dan pribadi
- [x] Pengalaman: riwayat karier
- [x] Kontak: CTA penutup dan footer
- [x] Responsif (desktop, tablet, ponsel) dengan menu ponsel

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 19 + Vite 7 + TypeScript      |
| Styling  | CSS biasa per komponen + token global |
| Ikon     | lucide-react, SVG devicon           |
| Font     | Inter Variable (self-hosted)        |
| Backend  | Tidak ada, situs statis             |

## Getting Started (Development)

### Prerequisites

- Node.js 20+

### Setup

```bash
cd web
cp .env.example .env
npm install
npm run dev
```

### Environment Variables

| Variable        | Description                                         | Default                 |
|-----------------|-----------------------------------------------------|-------------------------|
| `VITE_SITE_URL` | URL publik tanpa `/` di akhir, untuk canonical & OG | `http://localhost:5173` |

## Mengubah Isi

- Semua teks ada di [`src/data/profile.ts`](src/data/profile.ts).
- Foto hero: ganti `public/img/foto-hero.webp` (500×600, latar transparan). Yang sekarang hanya placeholder.
- Token warna, ukuran teks, dan spacing ada di [`src/styles/index.css`](src/styles/index.css).

## Production Deployment

### Build

```bash
npm run build
```

Hasilnya ada di `dist/` dan bisa diunggah ke hosting statis mana pun. Set `VITE_SITE_URL` ke domain produksi sebelum build.

### Health Check

Situs statis: `GET /` → 200 OK.

## API Documentation

Tidak ada API. Semua isi dibundel saat build.

## License

Hak cipta © Muhammad Rizky D. Semua hak dilindungi.
