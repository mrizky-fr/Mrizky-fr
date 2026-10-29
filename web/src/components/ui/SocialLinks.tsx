import { Globe, Package } from 'lucide-react';
import type { ReactNode } from 'react';
import { type SocialKind, socials } from '../../data/profile';
import './SocialLinks.css';

const ICON_SIZE = 16;

// Lucide tidak lagi memuat ikon merek.
const githubIcon = (
  <svg
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const icons: Record<SocialKind, ReactNode> = {
  github: githubIcon,
  website: <Globe size={ICON_SIZE} aria-hidden="true" />,
  npm: <Package size={ICON_SIZE} aria-hidden="true" />,
};

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`social-links ${className}`}>
      {socials.map((social) => (
        <li key={social.href}>
          <a
            className="social-links__link"
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
          >
            {icons[social.kind]}
          </a>
        </li>
      ))}
    </ul>
  );
}
