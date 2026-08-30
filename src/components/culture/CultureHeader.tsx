import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { WHATSAPP_CULTURA_URL } from '../../config/contact';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Trajetória', href: '#trajetoria' },
  { name: 'Hip-Hop', href: '#hiphop' },
  { name: 'Flashback', href: '#flashback' },
  { name: 'Cultura no DF', href: '#df' },
  { name: 'Participação', href: '#participacao' },
];

export function CultureHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-brand-black/90 backdrop-blur-md shadow-2xl border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/cultura" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
          <div className="font-display text-2xl md:text-3xl font-black uppercase flex flex-col leading-none tracking-tighter transition-transform group-hover:scale-105 duration-300">
            <span className="text-white">Jean</span>
            <span className="text-brand-green-lime">da Cultura</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
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
            to="/"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3 h-3" />
            Site principal
          </Link>
          <a
            href={WHATSAPP_CULTURA_URL}
            target="_blank"
            rel="noopener"
            className="bg-brand-green-lime text-brand-green-deep px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_10px_20px_rgba(118,255,3,0.2)] flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 text-white bg-white/10 rounded-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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
            className="lg:hidden fixed inset-0 top-[76px] bg-brand-black/98 backdrop-blur-xl z-40 p-8 flex flex-col"
          >
            <div className="flex flex-col gap-6 mb-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-display font-black uppercase text-white hover:text-brand-green-lime transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                href={WHATSAPP_CULTURA_URL}
                target="_blank"
                rel="noopener"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-green-lime text-brand-green-deep px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] text-center flex items-center justify-center gap-3 shadow-xl"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                WhatsApp Oficial
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao site principal
                </Link>
              </motion.div>
            </div>
            <div className="mt-auto text-center border-t border-white/10 pt-8">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">Cultura • Música • Comunidade</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}