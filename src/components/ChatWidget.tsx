import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { language } = useLanguage();

  const handleSend = () => {
    if (message.trim()) {
      // Here you would implement actual chat functionality
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center animate-pulse-glow"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 ltr:right-6 rtl:left-6 z-50 w-80 md:w-96 bg-card border border-border rounded-2xl shadow-2xl animate-scale-in">
          <div className="bg-gradient-primary text-primary-foreground p-4 rounded-t-2xl">
            <h3 className="font-semibold text-lg">
              {language === 'en' ? 'Chat with us!' : 'تحدث معنا!'}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'en' ? 'We typically reply in minutes' : 'نرد عادة في دقائق'}
            </p>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-muted/30">
            <div className="bg-secondary text-secondary-foreground p-3 rounded-lg max-w-[80%] animate-fade-in">
              <p className="text-sm">
                {language === 'en' 
                  ? 'Hello! How can we help you today?' 
                  : 'مرحباً! كيف يمكننا مساعدتك اليوم؟'}
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-border flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={language === 'en' ? 'Type a message...' : 'اكتب رسالة...'}
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
