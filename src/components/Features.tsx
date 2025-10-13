import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Clock, Target, DollarSign } from 'lucide-react';

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: GraduationCap,
      title: t('feature1Title'),
      description: t('feature1Desc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Clock,
      title: t('feature2Title'),
      description: t('feature2Desc'),
      color: 'bg-accent/10 text-accent-foreground',
    },
    {
      icon: Target,
      title: t('feature3Title'),
      description: t('feature3Desc'),
      color: 'bg-secondary/30 text-secondary-foreground',
    },
    {
      icon: DollarSign,
      title: t('feature4Title'),
      description: t('feature4Desc'),
      color: 'bg-primary/10 text-primary',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`h-12 w-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
