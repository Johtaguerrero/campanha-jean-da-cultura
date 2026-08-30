import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { WHATSAPP_DEFAULT_URL } from '../config/contact';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Biografia', href: '#jean' },
    { name: 'Atuação', href: '#cultura' },
    { name: 'Propostas', href: '#propostas' },
    { name: 'Transparência', href: '#transparencia' },
  ];

  const cultureLink = { name: 'Cultura', href: '/cultura', isRoute: true };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-brand-green-deep shadow-2xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="font-display text-2xl md:text-3xl font-black uppercase flex flex-col leading-none tracking-tighter transition-transform group-hover:scale-105 duration-300">
            <span className="text-white">Jean</span>
            <span className="text-brand-green-lime">da Cultura</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] transition-all text-white/70 hover:text-brand-green-lime relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green-lime transition-all group-hover:w-full" />
            </a>
          ))}
          <Link 
            to={cultureLink.href}
            className="text-[10px] font-black uppercase tracking-[0.2em] transition-all text-brand-green-lime hover:text-white relative group"
          >
            {cultureLink.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green-lime transition-all group-hover:w-full" />
          </Link>
          <a 
            href={WHATSAPP_DEFAULT_URL} 
            className="bg-brand-green-lime text-brand-green-deep px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_10px_20px_rgba(118,255,3,0.2)] flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            WhatsApp Oficial
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white bg-white/10 rounded-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-[88px] bg-brand-green-deep/95 backdrop-blur-xl z-40 p-8 flex flex-col"
          >
            <div className="flex flex-col gap-8 mb-12">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-black uppercase text-white hover:text-brand-green-lime transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link 
                  to={cultureLink.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-black uppercase text-brand-green-lime hover:text-white transition-colors"
                >
                  {cultureLink.name}
                </Link>
              </motion.div>
            </div>
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href={WHATSAPP_DEFAULT_URL} 
              className="bg-brand-green-lime text-brand-green-deep px-8 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] text-center flex items-center justify-center gap-3 shadow-xl"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              WhatsApp Oficial
            </motion.a>
            <div className="mt-auto text-center border-t border-white/5 pt-8">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">Brasília • Cultura • Comunidade</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
