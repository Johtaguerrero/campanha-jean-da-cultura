import { motion } from 'motion/react';

const regions = [
  'Ceilândia', 'Taguatinga', 'Samambaia', 'Sol Nascente',
  'Estrutural', 'Braslândia', 'Planaltina', 'Gama',
  'Santa Maria', 'Recanto das Emas',
];

export function CultureDFSection() {
  return (
    <section id="df" className="relative py-24 md:py-32 px-5 bg-brand-green-inst overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-green-lime font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Cultura no DF</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] mb-8 font-black text-white">
            Cultura não acontece <br />
            <span className="text-brand-green-lime">em um só CEP.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Artistas, coletivos, produtores e espaços culturais existem em cada canto do Distrito Federal. Nossa cultura é feita
            de gente que cria, trabalha e movimenta a economia criativa em todas as regiões administrativas.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {regions.map((region, idx) => (
            <motion.span
              key={region}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-xs text-white/70 hover:border-brand-green-lime/40 hover:text-brand-green-lime transition-all cursor-default"
            >
              {region}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}