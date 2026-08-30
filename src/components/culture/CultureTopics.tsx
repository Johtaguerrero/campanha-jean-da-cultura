import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Plus } from 'lucide-react';

const topics = [
  {
    id: '01',
    title: 'Fomento Cultural',
    challenge: 'Recursos concentrados no Plano Piloto, longe de quem produz nas periferias.',
    idea: 'Descentralizar o fomento com editais regionais e desburocratização do acesso.',
  },
  {
    id: '02',
    title: 'Juventude e Arte',
    challenge: 'Escassez de espaços dedicados à cultura urbana e às novas linguagens.',
    idea: 'Requalificar espaços públicos para coletivos artísticos e jovens criadores.',
  },
  {
    id: '03',
    title: 'Economia Criativa',
    challenge: 'Dificuldade de formalização e remuneração para pequenos produtores.',
    idea: 'Escritório de apoio técnico e jurídico ao produtor local.',
  },
  {
    id: '04',
    title: 'Produção Cultural',
    challenge: 'Falta de suporte à cadeia de produção de eventos e projetos.',
    idea: 'Fortalecer a circulação de artistas e a estrutura dos eventos independentes.',
  },
  {
    id: '05',
    title: 'Educação Profissional',
    challenge: 'Desconexão entre cursos e as demandas reais do mercado cultural.',
    idea: 'Parcerias para cursos técnicos em artes, áudio e produção.',
  },
  {
    id: '06',
    title: 'Infraestrutura Comunitária',
    challenge: 'Abandono de centros culturais nas regiões administrativas.',
    idea: 'Modernizar as Casas de Cultura do DF com gestão participativa.',
  },
];

export function CultureTopics() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.2, 0.2, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-5 bg-brand-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/homem-boné.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom origin-bottom"
          style={{ opacity: imageOpacity, scale: imageScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/40 to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/50 via-transparent to-brand-black/40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-brand-green-lime font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Pautas culturais</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] mb-8 font-black text-white">
            Ideias em <span className="text-brand-green-lime">debate.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-medium">
            Temas que guiam a construção de uma política cultural mais justa para o Distrito Federal.
          </p>
        </motion.div>

        <div className="space-y-4">
          {topics.map((topic, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-white/10 rounded-[2rem] bg-black/40 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-5 p-6 md:p-7 text-left"
                >
                  <span className="text-brand-green-lime font-display font-black text-xl md:text-2xl w-14 shrink-0">{topic.id}</span>
                  <span className="flex-1 text-white font-display font-bold uppercase text-base md:text-xl">{topic.title}</span>
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-brand-green-lime/10 text-brand-green-lime shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-7 pb-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Desafio</div>
                          <p className="text-sm text-white/60 leading-relaxed font-medium">{topic.challenge}</p>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-brand-green-lime uppercase tracking-widest mb-2">Ideia em debate</div>
                          <p className="text-sm text-white leading-relaxed font-semibold">{topic.idea}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}