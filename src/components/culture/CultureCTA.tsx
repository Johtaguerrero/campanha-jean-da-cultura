import { motion } from 'motion/react';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_CULTURA_URL } from '../../config/contact';
import { CANDIDATE } from '../../config/site';

export function CultureCTA() {
  return (
    <section className="py-24 md:py-32 px-5 bg-brand-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-deep/30 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-green-deep rounded-[3rem] p-8 md:p-16 border border-brand-green-lime/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:28px_28px] pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white mb-6 leading-[0.9] tracking-tighter">
                Cultura se faz <br />
                <span className="text-brand-green-lime">com participação.</span>
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-xl">
                Receba informações, acompanhe as ações e converse com a equipe pelo canal oficial.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a
                  href={WHATSAPP_CULTURA_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-3 bg-brand-green-lime text-brand-green-deep px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  WhatsApp Oficial
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar ao site principal
                </Link>
              </div>
            </div>

            <div className="shrink-0 text-center">
              <div className="inline-flex flex-col items-center justify-center border border-white/15 bg-black/20 rounded-[2.5rem] p-10 md:p-12">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Jean da Cultura</span>
                <span className="text-white text-xl font-display font-bold uppercase">Deputado Distrital</span>
                <span className="text-brand-green-lime text-6xl md:text-7xl font-display font-black leading-none my-3">43222</span>
                <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{CANDIDATE.party}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}