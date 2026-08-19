import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[60] animate-in slide-in-from-bottom duration-700">
      <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-green-vibrant" />
        
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 bg-brand-gray rounded-xl flex items-center justify-center text-brand-green-deep shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-black uppercase text-brand-black tracking-widest mb-1">Privacidade</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
              Utilizamos apenas cookies essenciais para garantir a melhor experiência em nosso portal informativo.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-brand-green-deep text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-green-inst transition-colors shadow-sm"
          >
            Entendido
          </button>
          <a 
            href="#privacidade"
            onClick={() => setIsVisible(false)}
            className="flex-1 bg-brand-gray text-gray-400 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center hover:text-brand-green-deep transition-colors"
          >
            Detalhes
          </a>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-4 text-gray-300 hover:text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
