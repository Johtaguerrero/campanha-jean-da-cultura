import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col pt-28 md:pt-32 lg:pt-40 overflow-hidden bg-brand-green-deep">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-vibrant/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green-lime/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-5 pt-0 pb-10 lg:py-10 lg:gap-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 order-2 lg:order-1 text-center lg:text-left mb-12 lg:mb-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <img 
              src="/logo-partido-verde-1.png" 
              alt="Partido Verde"
              className="h-12 md:h-16 w-auto object-contain"
            />
            <div className="inline-block bg-white/10 backdrop-blur-sm text-brand-green-lime font-display text-sm md:text-base font-bold px-6 py-2 rounded-full border border-white/20 shadow-sm uppercase tracking-wider">
              Portal Oficial Eleições 2026
            </div>
          </motion.div>
          
          <h1 className="text-[clamp(48px,8vw,110px)] leading-[0.9] text-white uppercase font-display font-black mb-8 tracking-tighter drop-shadow-2xl">
            Jean da <br />
            <span className="text-brand-green-lime">Cultura</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12 mb-8">
            <div className="flex flex-col">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Candidato a</span>
              <span className="text-white text-2xl md:text-4xl font-display font-bold uppercase border-b-4 border-brand-green-vibrant pb-1">Deputado Distrital</span>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1 text-center lg:text-left">Número Oficial</span>
              <span className="text-brand-green-lime text-7xl md:text-9xl font-display font-black leading-none drop-shadow-xl">43222</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 md:p-8 mb-10 text-center lg:text-left">
            <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase mb-4 leading-tight">
              Receba informativos no seu <br className="hidden md:block" />
              <span className="text-brand-green-vibrant">WhatsApp Oficial</span>
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">
              Faça parte do nosso grupo oficial para receber propostas, ações e participar ativamente da construção do nosso projeto.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5561995210111" 
                className="bg-brand-green-vibrant text-brand-green-deep px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Quero Fazer Parte
              </a>
              <a 
                href="https://instagram.com/jeandacultura" 
                target="_blank" 
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all"
              >
                Acompanhar Jean
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 relative w-full max-w-md lg:max-w-2xl order-1 lg:order-2 mt-2 lg:mt-0 mb-6 lg:mb-0"
        >
          <div className="relative z-10 aspect-[4/5] lg:aspect-square overflow-hidden rounded-[4rem] shadow-2xl border-8 border-white/10">
              <img 
                src="/jean.jpg" 
                alt="Jean da Cultura" 
                className="w-full h-full object-cover brightness-105 contrast-105 hover:scale-105 transition-all duration-700"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/80 via-transparent to-transparent" />
          </div>
          {/* Slogan Overlay */}
          <motion.div 
            initial={{ opacity: 0, rotate: 10, y: 50 }}
            animate={{ opacity: 1, rotate: -3, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 -left-6 md:-left-12 bg-brand-green-lime p-8 rounded-[2.5rem] shadow-2xl border-4 border-white rotate-[-3deg] z-20"
          >
            <p className="text-brand-green-deep font-display font-black text-xl md:text-2xl uppercase leading-none">
              Uma história <br />
              construída na <br />
              comunidade.
            </p>
          </motion.div>
          {/* Decorative Halo */}
          <div className="absolute -top-10 -right-10 w-60 h-60 border-[10px] border-brand-green-vibrant/20 rounded-full animate-pulse" />
        </motion.div>

      </div>

      {/* Campaign Footer Bar */}
      <div className="w-full bg-brand-black/50 backdrop-blur-md border-t border-white/5 py-6 px-5 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span className="text-brand-green-lime">CNPJ: 68.456.103/0001-02</span>
            <div className="w-px h-4 bg-white/10" />
            <span>Jean Carlos Sousa - Deputado Distrital 43222</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-brand-green-lime shadow-[0_0_15px_rgba(118,255,3,0.5)]" />
            <span className="text-white/60">Portal Oficial do Candidato</span>
          </div>
        </div>
      </div>
    </section>
  );
}
