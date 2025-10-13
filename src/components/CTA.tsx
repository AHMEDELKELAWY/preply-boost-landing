import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

const DISCOUNT_LINK = 'https://preply.com/en/?pref=MjMwOTMxNDE=&id=1760251051.137097&ep=a2';

export const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t('ctaTitle')}
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            {t('ctaSubtitle')}
          </p>

          <Button 
            asChild 
            size="xl" 
            className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl group"
          >
            <a href={DISCOUNT_LINK}>
              {t('claimDiscount')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
