import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Calendar, Rocket } from 'lucide-react';

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('step1Title'),
      description: t('step1Desc'),
      step: '01',
    },
    {
      icon: Calendar,
      title: t('step2Title'),
      description: t('step2Desc'),
      step: '02',
    },
    {
      icon: Rocket,
      title: t('step3Title'),
      description: t('step3Desc'),
      step: '03',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('howItWorksTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('howItWorksSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection lines - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="h-20 w-20 mx-auto rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-lg relative z-10">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-12 w-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary text-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
