import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { WHATSAPP_CULTURA_URL } from '../../config/contact';
import { CANDIDATE } from '../../config/site';

export function CultureHero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col pt-32 md:pt-36 overflow-hidden bg-brand-black">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green-inst/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-deep/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green-lime/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Waveform decorative */}
      <div className="absolute bottom-32 left-0 right-0 flex items-end justify-center gap-1 opacity-20 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-brand-green-lime rounded-full"
            style={{ height: `${8 + Math.abs(Math.sin(i * 0.7)) * 48}px` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-brand-green-lime font-display text-xs md:text-sm font-bold px-5 py-2 rounded-full mb-8 uppercase tracking-[0.25em]"
            >
              Cultura • Música • Comunidade
            </motion.div>

            <h1 className="text-[clamp(44px,7vw,96px)] leading-[0.9] text-white uppercase font-display font-black tracking-tighter drop-shadow-2xl mb-8">
              Uma vida <br />
              movida pela <br />
              <span className="text-brand-green-lime">Cultura.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
              A música faz parte da trajetória de Jean desde a juventude. Do DJ à produção cultural, sua história atravessa
              eventos, cultura urbana e ações comunitárias no Distrito Federal.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <div className="flex flex-col gap-1 border-l-4 border-brand-green-lime pl-4">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Jean da Cultura</span>
                <span className="text-white text-xl md:text-2xl font-display font-bold uppercase">Deputado Distrital</span>
                <span className="text-brand-green-lime text-4xl md:text-5xl font-display font-black leading-none">43222</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={WHATSAPP_CULTURA_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-3 bg-brand-green-lime text-brand-green-deep px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_50px_rgba(118,255,3,0.3)] group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Participar pelo WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#trajetoria"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/25 text-white px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all"
              >
                Conhecer a trajetória
              </a>
            </div>
          </motion.div>

          {/* Right Editorial Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-brand-green-inst/40 p-8 md:p-10">
              {/* Grid editorial decorative */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(118,255,3,0.08)_1px,transparent_0)] bg-[length:24px_24px] pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 space-y-6">
                <div className="text-[10px] font-bold text-brand-green-lime uppercase tracking-[0.3em]">Arquivo Cultural</div>

                <div className="grid grid-cols-2 gap-4">
                  {['DJ', 'Produção', 'Hip-Hop', 'Comunidade'].map((item) => (
                    <div key={item} className="p-4 bg-black/30 border border-white/10 rounded-2xl">
                      <div className="text-white font-display font-bold uppercase text-sm mb-1">{item}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest">eixo de atuação</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-white/40">
                  <div className="flex items-end gap-0.5" aria-hidden="true">
                    {[6, 12, 8, 16, 10, 18, 8, 14].map((h, i) => (
                      <div key={i} className="w-1 bg-brand-green-vibrant rounded-full" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest">identidade sonora do DF</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <a href="#trajetoria" aria-label="Rolar para trajetória" className="text-white/40 hover:text-brand-green-lime transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}