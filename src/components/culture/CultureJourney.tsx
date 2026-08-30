import { motion } from 'motion/react';
import { Disc3, Mic2, Radio, CalendarDays, Users } from 'lucide-react';

const pillars = [
  {
    icon: Disc3,
    title: 'DJ',
    description: 'A relação com a música começou nas pick-ups. O DJ traduz a escuta do território e a leitura do público.',
  },
  {
    icon: Mic2,
    title: 'Produção Cultural',
    description: 'Organização de eventos, articulação de artistas e realização de ações culturais na comunidade.',
  },
  {
    icon: Radio,
    title: 'Cultura Urbana',
    description: 'Hip-Hop, arte urbana e linguagens nascidas das ruas como ferramenta de identidade e expressão.',
  },
  {
    icon: CalendarDays,
    title: 'Eventos',
    description: 'Curadoria e realização de encontros que movimentam a cena local e geram oportunidade real.',
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Cultura como ponte entre pessoas, gerações e territórios do Distrito Federal.',
  },
];

const timeline = [
  {
    phase: 'Juventude',
    title: 'As pick-ups e a música',
    description: 'O primeiro contato com a cultura veio pelas pistas de dança e o ofício de DJ no Distrito Federal.',
  },
  {
    phase: 'Atuação cultural',
    title: 'Dos eventos à produção',
    description: 'A experiência de rua evoluiu para a produção de eventos e a articulação de artistas locais.',
  },
  {
    phase: 'Cultura urbana',
    title: 'Hip-Hop e território',
    description: 'A cultura urbana consolidou-se como eixo de identidade, trabalho e pertencimento.',
  },
  {
    phase: 'Caminho público',
    title: 'Cultura como política',
    description: 'A trajetória cultural se conecta à defesa da cultura como direito e motor de transformação social.',
  },
];

export function CultureJourney() {
  return (
    <section id="trajetoria" className="relative py-24 md:py-32 px-5 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-brand-green-lime font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Jean e a música</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] mb-8 font-black text-white">
            Antes da política, <br />
            <span className="text-brand-green-lime">a cultura.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-16 leading-relaxed font-medium">
            Jean Carlos Sousa, o Jean da Cultura, construiu sua história no chão da cultura. Do DJ na juventude à produção
            de eventos, sua caminhada é marcada pela música, pela cultura urbana e pelo trabalho comunitário no Distrito Federal.
          </p>
        </motion.div>

        {/* Editorial photo + timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* TODO: substituir por fotografia oficial fornecida pela campanha */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 bg-brand-green-inst/40 aspect-[4/5]">
              <img
                src="/_BRU3929.JPG"
                alt="Jean da Cultura"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-brand-green-lime text-brand-green-deep px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                  Cultura Que Move
                </span>
                <p className="text-white font-display text-2xl uppercase font-black leading-tight">
                  Do DJ à produção <br /> cultural no DF
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-brand-green-lime/10 rounded-full blur-2xl" aria-hidden="true" />
          </motion.div>

          <div className="relative">
            {/* Vertical timeline */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-green-lime/60 via-white/10 to-transparent" aria-hidden="true" />
            <div className="space-y-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 border-brand-green-lime bg-brand-black" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-brand-green-lime uppercase tracking-[0.25em]">{item.phase}</span>
                  <h3 className="text-xl md:text-2xl font-display font-bold uppercase text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-medium">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Concept cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-brand-green-lime/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-green-lime/10 rounded-xl flex items-center justify-center text-brand-green-lime mb-5 group-hover:bg-brand-green-lime group-hover:text-brand-green-deep transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display uppercase text-white mb-2 font-bold">{pillar.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-medium">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}