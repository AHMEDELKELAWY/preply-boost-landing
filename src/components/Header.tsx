import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen } from 'lucide-react';

const DISCOUNT_LINK = 'https://preply.com/en/?pref=MjMwOTMxNDE=&id=1760251051.137097&ep=a2';

export const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Preply
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a 
            href={DISCOUNT_LINK}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            {t('findTutor')}
          </a>
          <a 
            href={DISCOUNT_LINK}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            {t('becomeATutor')}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild variant="hero" size="default">
            <a href={DISCOUNT_LINK}>
              {t('getStarted')}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
