# Web Biografi - Muhammad Rizky D (Mrizky-fr)

Project ini adalah website biografi/portofolio personal berbasis React + TypeScript.

Website ini menampilkan:
- Home
- About
- CTA dan social links
- SEO metadata (title, description, Open Graph, Twitter card)
- `sitemap.xml` dan `robots.txt`

## Catatan Penggunaan

Silakan dipakai sebagai contoh/referensi project web biografi.
Boleh dijadikan baseline lalu diubah sesuai kebutuhan branding, konten, dan style kamu.

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS modular per komponen/halaman
- Lucide React (icon)

## Struktur Singkat

```bash
components/
  Header/
  Footer/
  Reveal/
pages/
  Landing/
  About/
public/
  robots.txt
  sitemap.xml
App.tsx
index.html
main.tsx
```

## Routing

Path utama:
- `/mrizky` -> Home
- `/mrizky/about` -> About

## Jalankan Project

Install dependency:

```bash
npm install
```

Jalankan dev server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## SEO dan Share

Konfigurasi SEO utama ada di:
- `App.tsx` (meta dinamis per path)
- `index.html` (meta default)
- `public/sitemap.xml`
- `public/robots.txt`

Jika mau ganti gambar share/fav icon, ubah URL gambar di:
- `index.html`
- `App.tsx`

## Deploy

Project bisa di-deploy ke:
- Vercel
- Netlify
- Cloudflare Pages
- VPS/Nginx
- Coolify (Dockerfile sudah tersedia)

---

Maintained by Muhammad Rizky D - Mrizky-fr.
