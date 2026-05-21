# BioEnergySemestaTama Company Profile Website

## Tentang Project

Website company profile **BioEnergySemestaTama** merupakan website company profile statis modern yang dikembangkan untuk memperkenalkan profil perusahaan, layanan, informasi bisnis, serta identitas digital perusahaan secara profesional di internet.

Project ini dibangun menggunakan teknologi modern berbasis frontend dengan fokus pada:

- Kecepatan akses website
- Tampilan profesional & modern
- SEO friendly
- Responsive mobile
- Struktur scalable
- User experience yang ringan dan cepat
- Optimasi performa untuk Google Search

Website ini bersifat statis sehingga tidak menggunakan sistem admin panel/CMS. Seluruh konten website dikelola langsung melalui source code untuk menjaga performa, keamanan, dan stabilitas website.

## Teknologi Yang Digunakan

Project dikembangkan menggunakan stack modern:

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Responsive Layout
- SEO Optimization
- Component Based Architecture

## Tujuan Pengembangan Website

Website ini dibuat untuk:

- Meningkatkan branding perusahaan
- Menampilkan informasi perusahaan secara profesional
- Menjadi identitas digital resmi perusahaan
- Mempermudah calon client mengenal layanan perusahaan
- Meningkatkan kredibilitas bisnis
- Mendukung kebutuhan promosi dan pemasaran digital

## Jenis Website

Kategori website:

- Company Profile Statis

Karakteristik:

- Tidak memiliki dashboard admin
- Tidak memiliki login management
- Tidak memiliki CMS
- Konten bersifat statis
- Perubahan konten dilakukan melalui source code

Halaman yang tersedia:

- Home
- About
- Services
- Gallery
- Contact

## Arsitektur Frontend

Project menggunakan pendekatan modern frontend architecture dengan sistem component reusable untuk mempermudah pengembangan dan maintenance.

Struktur pengembangan meliputi:

- Reusable Components
- Modular Folder Structure
- Page Based Routing
- Responsive UI Layout
- Lazy Loading Optimization
- SEO Meta Management
- Mobile First Design

## Keunggulan Teknologi React 19 + TypeScript

### React 19

React 19 digunakan untuk membangun user interface modern yang cepat, ringan, dan scalable.

Keunggulan:

- Virtual DOM rendering
- Reusable component system
- Efficient rendering
- Faster UI interaction
- Modern frontend ecosystem

### TypeScript

TypeScript digunakan untuk meningkatkan kualitas dan keamanan source code.

Keunggulan:

- Static typing
- Better code maintainability
- Error detection lebih cepat
- Scalable untuk project jangka panjang
- Mempermudah debugging dan development team collaboration

## Responsive Design

Website telah dioptimalkan untuk berbagai ukuran layar:

- Mobile Device
- Tablet
- Laptop
- Desktop

Layout menggunakan pendekatan responsive modern sehingga tampilan tetap stabil dan profesional di semua device.

## SEO Optimization

Website dikembangkan dengan struktur SEO friendly untuk membantu indexing Google dan meningkatkan visibilitas pencarian.

Optimasi meliputi:

- Meta title
- Meta description
- Semantic HTML
- Structured heading
- Optimized image
- Fast loading performance
- Clean URL structure

## Performance Optimization

Fokus utama project adalah performa dan efisiensi loading website.

Optimasi yang diterapkan:

- Asset optimization
- Image optimization
- Lazy loading
- Component splitting
- Lightweight frontend architecture
- Optimized production build

## Struktur Project

Contoh struktur folder project:

```bash
src/
│
├── assets/
├── components/
├── pages/
├── layouts/
├── routes/
├── hooks/
├── services/
├── styles/
├── utils/
└── types/
```

## Installation

Clone repository:

```bash
git clone repository-url
```

Masuk ke folder project:

```bash
cd bioenergysemestatama
```

Install dependencies:

```bash
npm install
```

Menjalankan development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Build Tools

Project menggunakan:

- Vite Build Tool

Keunggulan:

- Fast development server
- Optimized production build
- Lightweight bundling
- Faster hot reload

## Maintenance

Karena website bersifat statis, seluruh perubahan konten dilakukan melalui source code oleh developer.

Maintenance meliputi:

- Update konten
- Perubahan tampilan
- Penambahan halaman
- Optimasi SEO
- Update dependency
- Security update

## Scalability

Meskipun website bersifat statis, struktur project dirancang agar tetap scalable untuk pengembangan selanjutnya seperti:

- Penambahan CMS
- Dashboard admin
- Artikel/blog system
- API integration
- Multi language
- Dynamic content
- Authentication system

## Security

Project menggunakan pendekatan frontend modern yang relatif lebih aman dibanding CMS tradisional karena:

- Tidak memiliki admin panel publik
- Tidak menggunakan database publik
- Mengurangi potensi exploit backend
- Static deployment architecture

## Deployment

Website dapat di-deploy menggunakan:

- VPS Server
- Shared Hosting
- Vercel
- Netlify
- Cloudflare Pages
- Coolify (Dockerfile)

### Deployment ke Coolify

Project ini sudah disiapkan untuk Coolify menggunakan:

- `Dockerfile` multi-stage (build Vite + serve Nginx)
- `nginx.conf` untuk SPA fallback (`/index.html`)
- endpoint health check: `GET /health`

Langkah setup resource di Coolify:

1. Buat resource baru: **Application** (Dockerfile / Build Pack Dockerfile).
2. Hubungkan repository ini.
3. Build context: root project.
4. Exposed port / internal port: `80`.
5. Health check path: `/health`.
6. Tambahkan environment variables jika dibutuhkan di menu **Environment Variables** (jangan commit `.env` ke git).

Setelah deploy sukses, Coolify akan melakukan health check otomatis ke endpoint `/health`.

## Development Notes

Project dikembangkan dengan fokus pada:

- Clean code
- Maintainable architecture
- Reusable components
- Performance
- Scalability
- Modern UI/UX

## Copyright

© BioEnergySemestaTama. All rights reserved.

Developed using React 19 & TypeScript.
