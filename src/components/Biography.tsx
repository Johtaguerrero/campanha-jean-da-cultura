import { useState, useEffect } from 'react';
import { Users, Heart, Camera, MessageCircle, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Biography() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    { src: '/_BRU3929.JPG', alt: 'Jean da Cultura' },
  ];

  useEffect(() => {
    if (photos.length > 1) {
      const timer = setInterval(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [photos.length]);

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section id="jean" className="py-24 px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-brand-gray bg-brand-green-deep group aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentPhoto}
                  src={photos[currentPhoto].src} 
                  alt={photos[currentPhoto].alt}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover object-center scale-110" 
                />
              </AnimatePresence>
              
              {/* Controls - Only show if more than one photo */}
              {photos.length > 1 && (
                <>
                  <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={prevPhoto} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-brand-green-lime hover:text-brand-green-deep transition-all">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextPhoto} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-brand-green-lime hover:text-brand-green-deep transition-all">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {photos.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentPhoto(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentPhoto ? 'w-8 bg-brand-green-lime' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Natural gradient for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 right-10 pointer-events-none">
                <span className="bg-brand-green-lime text-brand-green-deep px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Ação Popular</span>
                <h4 className="text-white text-3xl font-display uppercase font-black leading-tight">Compromisso Real <br /> com as Pessoas</h4>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green-lime/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-green-deep font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Trajetória Real</span>
            <h2 className="text-4xl md:text-6xl font-display uppercase text-brand-black mb-8 leading-[0.9] font-black">
              Experiência que <br />
              <span className="text-brand-green-deep underline decoration-brand-green-lime decoration-8 underline-offset-8">vem das ruas</span>
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-10 leading-relaxed font-medium">
              <p>
                <strong>Jean Carlos Sousa</strong>, o Jean da Cultura, tem 50 anos e vive no Recanto das Emas desde 1991. Sua história é a história de quem acompanhou o crescimento das nossas cidades e sabe o valor de cada conquista comunitária.
              </p>
              <p>
                Comerciante e produtor cultural, Jean entende os desafios de quem empreende e de quem faz arte no Distrito Federal. Sua atuação sempre foi pautada pela <strong>ética, transparência e proximidade</strong> com as pessoas.
              </p>
              <p>
                Sua candidatura a Deputado Distrital 43222 é um projeto coletivo para levar a voz da cultura e da periferia para a Câmara Legislativa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-brand-gray rounded-3xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-green-deep shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Base Social</div>
                  <div className="font-bold text-brand-black">30+ Anos de DF</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-brand-gray rounded-3xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-green-deep shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Compromisso</div>
                  <div className="font-bold text-brand-black">Ficha Limpa</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Lead Capture Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-brand-green-deep rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="flex-1">
              <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-6 leading-tight">
                Receba informativos no seu <br />
                <span className="text-brand-green-vibrant">WhatsApp Oficial</span>
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-xl">
                Faça parte do nosso grupo oficial para receber propostas, ações e participar ativamente da construção do nosso projeto.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/5561995210111" 
                  className="bg-brand-green-vibrant text-brand-green-deep px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  Quero Fazer Parte
                </a>
                <a 
                  href="https://instagram.com/jeandacultura" 
                  target="_blank" 
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all"
                >
                  Acompanhar Jean
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="w-full max-w-xs aspect-square bg-white/5 rounded-full flex flex-col items-center justify-center border border-white/10 p-10">
              <span className="text-brand-green-vibrant text-6xl md:text-7xl font-display font-black leading-none mb-2">43222</span>
              <span className="text-white text-xl font-display font-bold uppercase tracking-widest">Cultura</span>
            </div>
          </div>
          {/* Decorative Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
