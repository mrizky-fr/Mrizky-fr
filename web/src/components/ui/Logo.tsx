import { CodeXml } from 'lucide-react';
import { profile } from '../../data/profile';
import './Logo.css';

/** Logo "</> Rizky D." seperti "</> Developer X" di referensi. */
export default function Logo() {
  return (
    <a className="logo" href="#beranda" aria-label={`${profile.fullName}, ke beranda`}>
      <CodeXml className="logo__mark" size={22} strokeWidth={2.4} aria-hidden="true" />
      <span className="logo__text">{profile.logoText}</span>
    </a>
  );
}
