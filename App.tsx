import { useEffect } from 'react';
import Landing from './pages/Landing';
import About from './pages/About';

type SeoConfig = {
    title: string;
    description: string;
};

const SHARE_IMAGE_PATH = '/assets/fav%20logo%20best.jpeg';

const SEO_BY_PATH: Record<string, SeoConfig> = {
    '/': {
        title: 'Muhammad Rizky D (Mrizky-fr) | Frontend Developer',
        description:
            'Portfolio resmi Muhammad Rizky D (Mrizky-fr), frontend developer yang fokus pada pengembangan website, UI clean, responsif, dan nyaman dipakai.',
    },
    '/mrizky': {
        title: 'Muhammad Rizky D (Mrizky-fr) | Home',
        description:
            'Halaman home portfolio Muhammad Rizky D (Mrizky-fr): profil singkat, pengalaman kerja, project publik, dan kontak kolaborasi.',
    },
    '/mrizky/': {
        title: 'Muhammad Rizky D (Mrizky-fr) | Home',
        description:
            'Halaman home portfolio Muhammad Rizky D (Mrizky-fr): profil singkat, pengalaman kerja, project publik, dan kontak kolaborasi.',
    },
    '/mrizky/about': {
        title: 'Muhammad Rizky D (Mrizky-fr) | About',
        description:
            'Tentang Muhammad Rizky D (Mrizky-fr): perjalanan kerja, peran di DealTech, dan fokus pengembangan frontend untuk pengalaman pengguna yang lebih baik.',
    },
};

const upsertMetaTag = (selector: string, attribute: 'name' | 'property', value: string) => {
    let tag = document.head.querySelector<HTMLMetaElement>(selector);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, selector.match(/\"(.+)\"/)?.[1] ?? '');
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', value);
};

const upsertCanonical = (href: string) => {
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', href);
};

function App() {
    const rawPathname = window.location.pathname.toLowerCase();
    const pathname = rawPathname.length > 1 ? rawPathname.replace(/\/+$/, '') : rawPathname;
    const seo = SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/'];

    useEffect(() => {
        const pageUrl = `${window.location.origin}${pathname}`;
        const ogImageUrl = `${window.location.origin}${SHARE_IMAGE_PATH}`;

        document.title = seo.title;

        upsertMetaTag('meta[name="description"]', 'name', seo.description);
        upsertMetaTag('meta[property="og:type"]', 'property', 'website');
        upsertMetaTag('meta[property="og:site_name"]', 'property', 'Muhammad Rizky D - Mrizky-fr');
        upsertMetaTag('meta[property="og:title"]', 'property', seo.title);
        upsertMetaTag('meta[property="og:description"]', 'property', seo.description);
        upsertMetaTag('meta[property="og:url"]', 'property', pageUrl);
        upsertMetaTag('meta[property="og:image"]', 'property', ogImageUrl);
        upsertMetaTag('meta[name="twitter:card"]', 'name', 'summary_large_image');
        upsertMetaTag('meta[name="twitter:title"]', 'name', seo.title);
        upsertMetaTag('meta[name="twitter:description"]', 'name', seo.description);
        upsertMetaTag('meta[name="twitter:image"]', 'name', ogImageUrl);
        upsertCanonical(pageUrl);
    }, [pathname, seo.description, seo.title]);

    if (pathname === '/mrizky/about') {
        return <About />;
    }

    return <Landing />;
}

export default App;
