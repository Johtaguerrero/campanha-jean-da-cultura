import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { WHATSAPP_CULTURA_URL } from '../../config/contact';

export function CultureHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  return (
    <section ref={sectionRef} id="inicio" className="relative min-h-[100svh] flex flex-col overflow-hidden bg-brand-black">
      {/* Full-screen Jean background image - fades on scroll */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/jean.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top origin-top"
          style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/50 to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-brand-black/60" />
      </div>

      {/* Animated waveform background - music visual */}
      <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center gap-[3px] px-4 opacity-15 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-[3px] bg-brand-green-lime rounded-full origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0.6, 1, 0.4] }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              repeat: Infinity,
              delay: i * 0.03,
              ease: 'easeInOut',
            }}
            style={{ height: `${20 + Math.abs(Math.sin(i * 0.5)) * 100}px` }}
          />
        ))}
      </div>

      {/* Floating vinyl grooves - desktop only */}
      <div className="hidden md:block absolute top-1/3 -right-20 w-80 h-80 rounded-full border border-white/5 pointer-events-none" aria-hidden="true" />
      <div className="hidden md:block absolute top-1/3 -right-10 w-60 h-60 rounded-full border border-white/5 pointer-events-none" />
      <div className="hidden md:block absolute top-1/3 right-0 w-40 h-40 rounded-full border border-brand-green-lime/10 pointer-events-none" />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-brand-green-lime/10 border border-brand-green-lime/20 text-brand-green-lime font-display text-[10px] md:text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-[0.3em]"
            >
              <span className="w-2 h-2 bg-brand-green-lime rounded-full animate-pulse" />
              Cultura • Música • Comunidade
            </motion.div>

            {/* Headline - staggered words */}
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(42px,8vw,100px)] leading-[0.88] text-white uppercase font-display font-black tracking-tighter"
              >
                Uma vida
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(42px,8vw,100px)] leading-[0.88] text-white uppercase font-display font-black tracking-tighter"
              >
                movida pela
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(52px,10vw,120px)] leading-[0.85] text-brand-green-lime uppercase font-display font-black tracking-tighter drop-shadow-[0_0_60px_rgba(118,255,3,0.3)]"
              >
                Cultura.
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed font-medium"
            >
              A música faz parte da trajetória de Jean desde a juventude. Do DJ à produção cultural, sua história
              atravessa eventos, cultura urbana e ações comunitárias no Distrito Federal.
            </motion.p>

            {/* Candidate info - appears early */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex flex-col gap-0.5 border-l-4 border-brand-green-lime pl-4">
                <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.25em]">Jean da Cultura</span>
                <span className="text-white text-lg md:text-xl font-display font-bold uppercase">Deputado Distrital</span>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: 'spring', stiffness: 200 }}
                className="text-brand-green-lime text-6xl md:text-7xl font-display font-black leading-none drop-shadow-[0_0_40px_rgba(118,255,3,0.4)]"
              >
                43222
              </motion.span>
            </motion.div>

            {/* CTA buttons - staggered entrance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href={WHATSAPP_CULTURA_URL}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center justify-center gap-3 bg-brand-green-lime text-brand-green-deep px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(118,255,3,0.3)] group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 fill-current relative z-10" />
                <span className="relative z-10">Participar pelo WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.a>
              <motion.a
                href="#trajetoria"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 text-white/80 px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/5 hover:border-white/30 hover:text-white transition-all"
              >
                Conhecer a trajetória
              </motion.a>
            </motion.div>
          </div>

          {/* Right Panel - Editorial visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-brand-green-inst/30 backdrop-blur-sm p-8 md:p-10">
              {/* Grid editorial decorative */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(118,255,3,0.06)_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none" aria-hidden="true" />

              {/* Music visualizer bars */}
              <div className="flex items-end justify-center gap-1 mb-6" aria-hidden="true">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-brand-green-lime/30 rounded-full"
                    initial={{ height: 4 }}
                    animate={{ height: [4, 8 + Math.abs(Math.sin(i * 0.8)) * 32, 4] }}
                    transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.05 }}
                  />
                ))}
              </div>

              <div className="relative z-10 space-y-5">
                <div className="text-[10px] font-bold text-brand-green-lime uppercase tracking-[0.3em]">Arquivo Cultural</div>

                <div className="grid grid-cols-2 gap-3">
                  {['DJ', 'Produção', 'Hip-Hop', 'Comunidade'].map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 + idx * 0.1 }}
                      className="p-4 bg-black/30 border border-white/10 rounded-xl hover:border-brand-green-lime/30 transition-colors"
                    >
                      <div className="text-white font-display font-bold uppercase text-sm">{item}</div>
                      <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1">eixo de atuação</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-white/40 pt-2">
                  <div className="flex items-end gap-[2px]" aria-hidden="true">
                    {[6, 12, 8, 16, 10, 18, 8, 14].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-brand-green-vibrant rounded-full"
                        initial={{ height: 2 }}
                        animate={{ height: h }}
                        transition={{ delay: 2.2 + i * 0.05, duration: 0.3 }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-medium">identidade sonora do DF</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 pb-8 flex justify-center"
      >
        <a href="#trajetoria" aria-label="Rolar para trajetória" className="flex flex-col items-center gap-2 text-white/30 hover:text-brand-green-lime transition-colors group">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explorar</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}