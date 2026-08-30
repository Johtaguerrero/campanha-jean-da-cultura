import { motion } from 'motion/react';
import { GraduationCap, Warehouse, Disc, Briefcase, FileText, Map } from 'lucide-react';

const pillars = [
  {
    id: '01',
    icon: GraduationCap,
    title: 'Formação',
    description: 'Oficinas, escolas de arte e capacitação para novas gerações de artistas, DJs, MCs, dançarinos e produtores.',
  },
  {
    id: '02',
    icon: Warehouse,
    title: 'Espaços culturais',
    description: 'Centros culturais vivos e abertos à cultura urbana, com gestão comunitária e acesso real aos territórios.',
  },
  {
    id: '03',
    icon: Disc,
    title: 'Produção e circulação',
    description: 'Apoio a beatmakers, produtores e eventos independentes que fazem a cena girar nas periferias.',
  },
  {
    id: '04',
    icon: Briefcase,
    title: 'Economia criativa',
    description: 'Formalização, remuneração justa e geração de renda para quem vive e trabalha com cultura.',
  },
  {
    id: '05',
    icon: FileText,
    title: 'Editais e acesso',
    description: 'Desburocratização do fomento e editais que chegam de fato aos coletivos e artistas locais.',
  },
  {
    id: '06',
    icon: Map,
    title: 'Cultura nas RAs',
    description: 'Cultura descentralizada, presente em todas as regiões administrativas, não apenas no centro.',
  },
];

export function HipHopSection() {
  return (
    <section id="hiphop" className="relative py-24 md:py-32 px-5 bg-brand-green-inst overflow-hidden">
      {/* waveform decor */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-1 opacity-10 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="w-1 bg-brand-green-vibrant" style={{ height: `${10 + Math.abs(Math.cos(i * 0.5)) * 60}px` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-brand-green-lime font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Hip-Hop</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] mb-8 font-black text-white">
            Hip-Hop é cultura, <br />
            <span className="text-brand-green-lime">trabalho e território.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-medium">
            Do DJ ao MC, do breaking ao graffiti, o Hip-Hop é uma das expressões mais potentes da cultura urbana brasileira.
            É linguagem, identidade, fonte de renda e caminho de formação para a juventude.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-brand-green-lime/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-[80px] font-display font-black text-white/5 group-hover:text-brand-green-lime/10 transition-colors leading-none" aria-hidden="true">
                  {pillar.id}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-green-lime/10 rounded-xl flex items-center justify-center text-brand-green-lime mb-6 group-hover:bg-brand-green-lime group-hover:text-brand-green-deep transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display uppercase text-white mb-3 font-bold">{pillar.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-medium">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}