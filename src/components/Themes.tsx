import { Music, Palette, Users, Zap, Briefcase, Heart } from 'lucide-react';
import { CultureCategory, ThemeItem } from '../types';
import { motion } from 'motion/react';

const categories: CultureCategory[] = [
  { title: 'Hip-Hop', icon: Music },
  { title: 'Arte Urbana', icon: Palette },
  { title: 'Juventude', icon: Users },
  { title: 'Economia Criativa', icon: Zap },
  { title: 'Produção Cultural', icon: Briefcase },
  { title: 'Cultura Popular', icon: Heart },
];

const themes: ThemeItem[] = [
  { title: 'Fomento Cultural', problem: 'Centralização de recursos no Plano Piloto.', proposal: 'Descentralização através de editais regionais.' },
  { title: 'Esporte Comunitário', problem: 'Falta de apoio para ligas de futebol amador.', proposal: 'Criação de um fundo de apoio ao esporte de base.' },
  { title: 'Juventude e Arte', problem: 'Escassez de espaços para a cultura urbana.', proposal: 'Requalificação de espaços públicos para coletivos artísticos.' },
  { title: 'Economia Criativa', problem: 'Dificuldade de formalização para pequenos produtores.', proposal: 'Escritório de apoio técnico e jurídico ao produtor local.' },
  { title: 'Educação Profissional', problem: 'Desconexão entre cursos e mercado cultural.', proposal: 'Parcerias com o Sistema S para cursos técnicos em artes.' },
  { title: 'Moradia Digna', problem: 'Déficit habitacional nas periferias.', proposal: 'Regularização fundiária e projetos habitacionais integrados.' },
  { title: 'Trabalho e Renda', problem: 'Desemprego entre jovens periféricos.', proposal: 'Incentivos para empresas que contratam artistas e técnicos locais.' },
  { title: 'Infraestrutura Comunitária', problem: 'Abandono de centros culturais nas RAs.', proposal: 'Programa de modernização das Casas de Cultura do DF.' },
];

export function Culture() {
  return (
    <section id="cultura" className="py-24 px-5 bg-brand-green-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-brand-green-lime font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Eixos de Atuação</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] mb-8 text-white font-black">
            Cultura para <span className="text-brand-green-lime">Todos</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            A cultura é a alma de Brasília. Nosso compromisso é democratizar o acesso e fortalecer a identidade urbana em todas as regiões.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-brand-green-lime/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-green-lime/10 rounded-2xl flex items-center justify-center text-brand-green-lime mb-8 group-hover:bg-brand-green-lime group-hover:text-brand-green-deep transition-all">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display uppercase tracking-wider mb-4 text-white font-bold">{cat.title}</h3>
                <p className="text-sm text-white/50 font-medium leading-relaxed">Incentivo ao Hip-Hop, projetos artísticos e apoio a festivais no Recanto das Emas e demais regiões.</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Themes() {
  return (
    <section id="atuacao" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-green-deep font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Debate Público</span>
          <h2 className="text-4xl md:text-5xl font-display uppercase text-brand-black leading-tight font-black">
            Temas em <span className="text-brand-green-deep">Pauta</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 bg-brand-gray rounded-[2rem] border border-gray-100 hover:border-brand-green-vibrant transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-xl font-display uppercase text-brand-green-deep mb-6 leading-tight font-bold group-hover:text-brand-green-vibrant transition-colors">{theme.title}</h3>
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Diagnóstico</div>
                  <p className="text-xs text-gray-600 leading-relaxed italic">"{theme.problem}"</p>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <div className="text-[10px] font-bold text-brand-green-deep uppercase tracking-widest mb-2">Ideia Central</div>
                <p className="text-xs text-brand-black font-semibold leading-relaxed">{theme.proposal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
