import { motion } from 'motion/react';

const regions = [
  'Ceilândia', 'Taguatinga', 'Samambaia', 'Sol Nascente',
  'Estrutural', 'Braslândia', 'Planaltina', 'Gama',
  'Santa Maria', 'Recanto das Emas'
];

export function Regions() {
  return (
    <section className="py-24 px-5 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-brand-green-deep font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Presença</span>
          <h2 className="text-4xl md:text-7xl font-display uppercase leading-[0.85] mb-8 font-black text-brand-black">
            Brasília feita <br />
            <span className="text-brand-green-deep">de pessoas</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 font-medium">
            Com base no Recanto das Emas, nossa atuação se estende por todas as cidades que movem o Distrito Federal.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {regions.map((region, idx) => (
            <motion.div 
              key={region}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-8 py-3 bg-brand-gray border border-gray-100 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-green-vibrant hover:text-brand-black transition-all cursor-default shadow-sm"
            >
              {region}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-brand-gray rounded-[3rem] border border-gray-100 max-w-3xl mx-auto shadow-brand"
        >
          <p className="text-lg md:text-xl font-medium text-brand-green-deep italic leading-relaxed">
            "Nossa política é feita de escuta e presença. Acreditamos que o futuro do DF se constrói ouvindo quem vive a realidade de cada cidade."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function Proposals() {
  const proposalItems = [
    { id: '01', title: 'Cultura Descentralizada', problem: 'Recursos concentrados no centro.', proposal: 'Editais exclusivos para as RAs e desburocratização do fomento.' },
    { id: '02', title: 'Polos de Inovação', problem: 'Falta de oportunidade para jovens.', proposal: 'Criação de centros de economia criativa e formação técnica local.' },
    { id: '03', title: 'Espaços Vivos', problem: 'Centros culturais e praças abandonadas.', proposal: 'Revitalização participativa e gestão comunitária de espaços públicos.' },
  ];

  return (
    <section id="propostas" className="py-24 px-5 bg-brand-green-deep">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-green-lime font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Nosso Caminho</span>
          <h2 className="text-4xl md:text-5xl font-display uppercase text-white leading-tight font-black">
            Propostas de <span className="text-brand-green-lime">Ação</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {proposalItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-white/10 hover:border-brand-green-lime/30 transition-all"
            >
              <div className="text-6xl font-display font-black text-brand-green-lime/10 mb-8 group-hover:text-brand-green-lime/30 transition-colors">{item.id}</div>
              <h3 className="text-2xl font-display uppercase text-white mb-8 leading-tight font-bold">{item.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Diagnóstico</div>
                  <p className="text-sm text-white/60 leading-relaxed italic">{item.problem}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-green-lime uppercase tracking-widest mb-2">Ação Proposta</div>
                  <p className="text-sm text-white font-semibold leading-relaxed">{item.proposal}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
