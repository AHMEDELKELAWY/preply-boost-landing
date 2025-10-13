import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-learning.jpg';

const DISCOUNT_LINK = 'https://preply.com/en/?pref=MjMwOTMxNDE=&id=1760251051.137097&ep=a2';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 gap-2 py-2 px-4 hover:bg-primary/20">
              <Sparkles className="h-4 w-4" />
              {t('heroDiscount')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('heroTitle')}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl" className="group">
                <a href={DISCOUNT_LINK}>
                  {t('startLearning')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="soft" size="xl">
                <a href={DISCOUNT_LINK}>
                  {t('viewAllTutors')}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { value: '100,000+', label: t('experiencedTutors') },
                { value: '300,000+', label: t('starReviews') },
                { value: '120+', label: t('subjectsTaught') },
                { value: '180+', label: t('tutorNationalities') },
              ].map((stat, idx) => (
                <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in lg:animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroImage}
                alt="Learning with Preply"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-sm text-muted-foreground">Discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
