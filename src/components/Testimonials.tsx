import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonial1'),
      author: t('testimonial1Author'),
      rating: 5,
    },
    {
      quote: t('testimonial2'),
      author: t('testimonial2Author'),
      rating: 5,
    },
    {
      quote: t('testimonial3'),
      author: t('testimonial3Author'),
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">Preply Student</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
