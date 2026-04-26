import type { Lang } from '../i18n/languages';

export interface NavItem {
  key: string;
  href: (lang: Lang) => string;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const mainNav: NavItem[] = [
  { key: 'nav.home', href: (lang) => `${base}/${lang}/` },
  { key: 'nav.works', href: (lang) => `${base}/${lang}/oeuvres/` },
  { key: 'nav.exhibitions', href: (lang) => `${base}/${lang}/expositions/` },
  { key: 'nav.publications', href: (lang) => `${base}/${lang}/publications/` },
  { key: 'nav.press', href: (lang) => `${base}/${lang}/presse/` },
  { key: 'nav.biography', href: (lang) => `${base}/${lang}/biographie/` },
  { key: 'nav.contact', href: (lang) => `${base}/${lang}/contact/` },
];
