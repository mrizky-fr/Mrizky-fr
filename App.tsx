import { useEffect } from 'react';
import Landing from './pages/Landing';

type SeoConfig = {
    title: string;
    description: string;
};

const SEO_BY_PATH: Record<string, SeoConfig> = {
    '/': {
        title: 'PT Bio Energy Semesta Tama | Produsen Wood Pellet Berkualitas',
        description:
            'PT Bio Energy Semesta Tama menyediakan wood pellet berkualitas untuk kebutuhan industri dengan pasokan stabil, terstandar, dan ramah lingkungan.',
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
    const pathname = window.location.pathname.toLowerCase();
    const seo = SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/'];

    useEffect(() => {
        const pageUrl = `${window.location.origin}${pathname}`;
        const ogImageUrl = `${window.location.origin}/assets/fav%20logo%20best.jpeg`;

        document.title = seo.title;

        upsertMetaTag('meta[name="description"]', 'name', seo.description);
        upsertMetaTag('meta[property="og:type"]', 'property', 'website');
        upsertMetaTag('meta[property="og:site_name"]', 'property', 'PT Bio Energy Semesta Tama');
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

    return <Landing />;
}

export default App;
