import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CULTURA_URL } from '../../config/contact';

const topics = [
  'Hip-Hop',
  'Flashback',
  'Arte Urbana',
  'Festivais',
  'Dança',
  'Audiovisual',
  'Cultura Popular',
  'Produção Cultural',
];

export function CultureParticipation() {
  return (
    <section id="participacao" className="relative py-24 md:py-32 px-5 bg-brand-green-inst overflow-hidden">
      <div className="absolute top-0 left-0 right-0 flex items-end justify-center gap-1 opacity-10 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 70 }).map((_, i) => (
          <div key={i} className="w-1 bg-brand-green-lime" style={{ height: `${12 + Math.abs(Math.sin(i * 0.9)) * 52}px` }} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-brand-green-lime/10 rounded-full flex items-center justify-center text-brand-green-lime mx-auto mb-8">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white mb-8 leading-[0.9] tracking-tighter">
            Que cultura você quer <br />
            <span className="text-brand-green-lime">mais forte no DF?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Conte para a equipe o que importa para a sua região e para a cena cultural onde você vive. Sua voz ajuda a construir
            a pauta.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {topics.map((topic, idx) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-widest text-xs text-white/70"
              >
                {topic}
              </motion.span>
            ))}
          </div>

          <a
            href={WHATSAPP_CULTURA_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-3 bg-brand-green-lime text-brand-green-deep px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_50px_rgba(118,255,3,0.3)]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Conversar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}