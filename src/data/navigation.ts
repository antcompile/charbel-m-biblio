import type { Lang } from '../i18n/languages';

export interface NavItem {
  key: string;
  href: (lang: Lang) => string;
}

export const mainNav: NavItem[] = [
  { key: 'nav.home', href: (lang) => `/${lang}/` },
  { key: 'nav.works', href: (lang) => `/${lang}/oeuvres/` },
  { key: 'nav.exhibitions', href: (lang) => `/${lang}/expositions/` },
  { key: 'nav.publications', href: (lang) => `/${lang}/publications/` },
  { key: 'nav.press', href: (lang) => `/${lang}/presse/` },
  { key: 'nav.biography', href: (lang) => `/${lang}/biographie/` },
  { key: 'nav.contact', href: (lang) => `/${lang}/contact/` },
];
