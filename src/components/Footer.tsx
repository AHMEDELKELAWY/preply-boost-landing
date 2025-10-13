import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const DISCOUNT_LINK = 'https://preply.com/en/?pref=MjMwOTMxNDE=&id=1760251051.137097&ep=a2';

export const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: t('aboutUs'), href: DISCOUNT_LINK },
        { label: t('careers'), href: DISCOUNT_LINK },
        { label: t('blog'), href: DISCOUNT_LINK },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: t('helpCenter'), href: DISCOUNT_LINK },
        { label: t('contactUs'), href: DISCOUNT_LINK },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: t('termsOfService'), href: DISCOUNT_LINK },
        { label: t('privacyPolicy'), href: DISCOUNT_LINK },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: DISCOUNT_LINK },
    { icon: Twitter, href: DISCOUNT_LINK },
    { icon: Instagram, href: DISCOUNT_LINK },
    { icon: Linkedin, href: DISCOUNT_LINK },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Preply</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {t('heroSubtitle').split('.')[0]}.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="h-10 w-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Preply. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};
