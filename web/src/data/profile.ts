import {
  AudioLines,
  Building2,
  CodeXml,
  Component,
  Gem,
  LayoutDashboard,
  type LucideIcon,
  Palette,
  PanelsTopLeft,
  Server,
  ShoppingBag,
} from 'lucide-react';

/*
  Semua isi halaman, disusun dari README profil GitHub (../README.md).
  Ubah teks di sini, bukan di komponen.
*/

export type NavItem = { label: string; href: string };
export type SocialKind = 'github' | 'website' | 'npm';
export type SocialLink = { kind: SocialKind; label: string; href: string };
export type Workplace = { name: string; icon: LucideIcon };
export type Skill = { icon: LucideIcon; title: string; desc: string; tags: string[] };
export type TechItem = { name: string; src: string };
export type ProjectLink = { label: string; href: string };
export type Project = {
  name: string;
  kind: 'Open source' | 'Pribadi';
  desc: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
};
export type Experience = {
  role: string;
  company: string;
  note?: string;
  period: string;
  points: string[];
};

const CAREER_START_YEAR = 2021;

export function yearsOfExperience(now = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR;
}

export const profile = {
  fullName: 'Muhammad Rizky D',
  shortName: 'Rizky',
  logoText: 'Rizky D.',
  role: 'Backend & Frontend · UI/UX Developer',
  company: 'DealTech',
};

export const links = {
  github: 'https://github.com/mrizky-fr',
  dealtechGithub: 'https://github.com/Deal-Tech',
  dealtechWebsite: 'https://tech.mudahdeal.com/company/',
  npmDealtechUi: 'https://www.npmjs.com/package/dealtech-ui',
};

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Kontak', href: '#kontak' },
];

export const socials: SocialLink[] = [
  { kind: 'github', label: 'GitHub mrizky-fr', href: links.github },
  { kind: 'website', label: 'Website DealTech', href: links.dealtechWebsite },
  { kind: 'npm', label: 'dealtech-ui di npm', href: links.npmDealtechUi },
];

export const hero = {
  greeting: 'Saya Rizky,',
  title: 'Web Developer',
  desc: 'Membangun aplikasi web secara utuh, dari sisi backend hingga antarmuka yang responsif dan nyaman dipakai.',
  about:
    'Backend & Frontend Developer sekaligus UI/UX Developer di DealTech, lini digital PT Mudahdeal Digital Grup.',
  work: 'Saat ini fokus mengembangkan DealTech UI, starter panel admin dan koleksi komponen publik.',
};

export const about = {
  title: `Membangun aplikasi web sejak ${CAREER_START_YEAR}`,
  intro:
    'Fokusnya membangun aplikasi web secara utuh, dari sisi backend hingga antarmuka: design system dan library komponen, panel admin, sampai website yang responsif dan nyaman dipakai.',
  principle:
    'AI mempercepat proses, tetapi karakter sebuah antarmuka tetap lahir dari keputusan desain manusia: layout, spacing, ritme visual, dan detail interaksi yang membuat produk terasa dirancang, bukan sekadar di-generate.',
  stats: [
    { value: `${yearsOfExperience()}+`, label: ['Tahun', 'pengalaman'] },
    { value: '59', label: ['Element', 'DealTech UI'] },
  ],
};

export const workplaces: Workplace[] = [
  { name: 'DealTech', icon: CodeXml },
  { name: 'Mudahdeal Digital Grup', icon: Building2 },
  { name: 'Palingmurah.net', icon: ShoppingBag },
  { name: 'Butik Emas', icon: Gem },
];

export const skills: Skill[] = [
  {
    icon: Server,
    title: 'Backend Development',
    desc: 'Merancang API, logika bisnis, dan struktur database yang rapi serta mudah dirawat.',
    tags: ['PHP', 'Golang', 'Laravel'],
  },
  {
    icon: PanelsTopLeft,
    title: 'Frontend Development',
    desc: 'Membangun antarmuka web yang responsif, cepat, dan nyaman dipakai di semua ukuran layar.',
    tags: ['React', 'Next.js', 'Vue', 'TypeScript'],
  },
  {
    icon: Palette,
    title: 'UI/UX & Design System',
    desc: 'Menata layout, spacing, ritme visual, dan detail interaksi agar produk terasa dirancang.',
    tags: ['Design system', 'Tailwind CSS'],
  },
  {
    icon: Component,
    title: 'Komponen Reusable',
    desc: 'Menerjemahkan kebutuhan produk menjadi komponen dan layout yang bisa dipakai ulang lintas project.',
    tags: ['DealTech UI', 'CLI', 'npm'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard & Panel Admin',
    desc: 'Panel admin yang konsisten, dari shell dan tema hingga halaman siap pakai.',
    tags: ['React', 'Laravel', 'MySQL'],
  },
  {
    icon: AudioLines,
    title: 'Produksi & Remix Musik',
    desc: 'Di luar kode, menekuni produksi dan remix musik sebagai ruang eksplorasi kreatif.',
    tags: ['Produksi', 'Remix'],
  },
];

export const techStack: TechItem[] = [
  { name: 'PHP', src: '/img/tech/php.svg' },
  { name: 'Golang', src: '/img/tech/go.svg' },
  { name: 'React', src: '/img/tech/react.svg' },
  { name: 'Next.js', src: '/img/tech/nextjs.svg' },
  { name: 'Vue', src: '/img/tech/vuejs.svg' },
  { name: 'Laravel', src: '/img/tech/laravel.svg' },
  { name: 'Kotlin', src: '/img/tech/kotlin.svg' },
  { name: 'HTML', src: '/img/tech/html5.svg' },
];

export const projects: Project[] = [
  {
    name: 'DealTech UI',
    kind: 'Open source',
    featured: true,
    desc: 'Starter panel admin React yang dikustomisasi agar rapi dan konsisten. Versi 3.0 hadir dengan 59 element serta shell dan tema baru. CLI bergaya shadcn/ui untuk men-generate starter dan menambahkan element, layout, atau halaman tersedia di v1 dan v2.0-next.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'npm'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Deal-Tech/dealtech-ui' },
      { label: 'npm', href: links.npmDealtechUi },
    ],
  },
  {
    name: 'XnimeID',
    kind: 'Pribadi',
    desc: 'Panel admin full-stack di atas starter DealTech UI v2.0-next.',
    stack: ['React 19', 'Vite 7', 'TypeScript', 'Laravel 12', 'MySQL'],
    links: [{ label: 'GitHub', href: 'https://github.com/mrizky-fr/Xnime-ID' }],
  },
  {
    name: 'DealTech UI Public Component',
    kind: 'Open source',
    desc: 'Koleksi elements, sections, dan pages siap pakai yang dikurasi satu per satu, acuan agar hasil kerja bersama AI tetap konsisten dan berkarakter.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'GitHub', href: 'https://github.com/Deal-Tech/dealtech-ui-for-public-component' }],
  },
  {
    name: 'Vocalift Vocal Remover',
    kind: 'Open source',
    desc: 'Aplikasi web lokal untuk memisahkan lagu menjadi vokal dan instrumental berbasis HTDemucs dan RoFormer, dari file, YouTube, atau TikTok.',
    stack: ['Python', 'Audio ML'],
    links: [{ label: 'GitHub', href: 'https://github.com/Deal-Tech/vocalift-vocal-remover' }],
  },
  {
    name: 'Next-FLM',
    kind: 'Pribadi',
    desc: 'Platform berbagi film gratis dan berbayar, ruang eksplorasi konsep UI, alur konten, dan pengalaman pengguna.',
    stack: ['UI/UX', 'Alur konten'],
    links: [],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Backend & Frontend · UI/UX Developer',
    company: 'DealTech, PT Mudahdeal Digital Grup',
    note: 'dulu Palingmurah.net',
    period: '2021 – Sekarang',
    points: [
      'Mengembangkan aplikasi web dari sisi backend hingga frontend untuk project DealTech',
      'Membangun dan memelihara DealTech UI, library komponen React yang menjadi fondasi panel admin dan website DealTech',
      'Merancang antarmuka yang responsif, konsisten, dan berorientasi pada pengalaman pengguna',
      'Menerjemahkan kebutuhan produk menjadi komponen dan layout yang bisa dipakai ulang lintas project',
    ],
  },
  {
    role: 'Retail & Pelayanan Pelanggan',
    company: 'Butik Emas',
    period: '2018 – 2021',
    points: [
      'Membentuk disiplin kerja, komunikasi dengan pelanggan, dan konsistensi menjaga kualitas layanan, fondasi yang terbawa ke cara kerja sebagai developer',
    ],
  },
];

export const contact = {
  title: 'Punya ide project web? Mari wujudkan bersama saya.',
  desc: 'Terbuka untuk kolaborasi project web, backend, UI/UX, dan pengembangan komponen. Kolaborasi dapat diajukan melalui DealTech.',
};
