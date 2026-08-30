import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Disc3, Users2, PartyPopper, Heart, Sparkles, MapPin } from 'lucide-react';

const blocks = [
  { icon: Heart, title: 'Memória', description: 'Flashback é memória afetiva que atravessa gerações.' },
  { icon: Disc3, title: 'DJs', description: 'Quem fez e faz as pistas viverem nas comunidades.' },
  { icon: PartyPopper, title: 'Bailes', description: 'Encontros que marcaram época e construíram identidade.' },
  { icon: Users2, title: 'Encontros', description: 'Pontes entre gerações que dançam a mesma história.' },
  { icon: Sparkles, title: 'Gerações', description: 'Pais e filhos unidos pela mesma trilha sonora.' },
  { icon: MapPin, title: 'Território', description: 'Cada região guarda seus sons, seus clássicos e sua história.' },
];

export function FlashbackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.25, 0.25, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section ref={sectionRef} id="flashback" className="relative py-24 md:py-32 px-5 bg-brand-black overflow-hidden">
      {/* Background image - passinho Ceilândia */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/passinho-ceilandia.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover origin-center"
          style={{ opacity: imageOpacity, scale: imageScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/60 to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-brand-black/70" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-brand-green-lime font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Flashback</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] mb-8 font-black text-white">
            Memória que <br />
            <span className="text-brand-green-lime">ainda toca.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-medium">
            Flashback também é memória afetiva, encontro entre gerações e preservação da história musical das comunidades.
          </p>
        </motion.div>

        {/* Tracklist-style blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group flex items-start gap-5 p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-brand-green-lime/30 transition-all"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-[10px] font-mono text-brand-green-lime/60 mb-2">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="w-11 h-11 rounded-xl bg-brand-green-lime/10 border border-brand-green-lime/20 flex items-center justify-center text-brand-green-lime group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display uppercase text-white mb-1 font-bold">{block.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">{block.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tracklist number row */}
        <div className="mt-16 flex items-center justify-center gap-4 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="text-brand-green-lime/20 font-display font-black text-3xl md:text-5xl"
            >
              {String(i + 1).padStart(2, '0')}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}