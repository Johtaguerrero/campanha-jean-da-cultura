import { Instagram, Facebook, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_CULTURA_URL } from '../../config/contact';

export function CultureFooter() {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 px-5 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="font-display text-2xl font-black uppercase flex flex-col leading-none mb-6 tracking-tighter">
              <span className="text-white">Jean</span>
              <span className="text-brand-green-lime">da Cultura</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              A música e a cultura como motor de transformação do Distrito Federal.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/jeandacultura" target="_blank" rel="noopener" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white shadow-sm hover:bg-brand-green-lime hover:text-brand-green-deep transition-all border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/Recantodasemas" target="_blank" rel="noopener" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white shadow-sm hover:bg-brand-green-lime hover:text-brand-green-deep transition-all border border-white/10">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase text-brand-green-lime text-xs tracking-[0.3em] mb-8 font-black">Navegação</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <Link to="/" className="text-white/70 hover:text-brand-green-lime transition-colors flex items-center gap-2">
                  Site principal <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/cultura" className="text-white/70 hover:text-brand-green-lime transition-colors">Cultura</Link>
              </li>
              <li>
                <a href={WHATSAPP_CULTURA_URL} target="_blank" rel="noopener" className="text-white/70 hover:text-brand-green-lime transition-colors flex items-center gap-2">
                  WhatsApp <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/jeandacultura" target="_blank" rel="noopener" className="text-white/70 hover:text-brand-green-lime transition-colors">Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com/Recantodasemas" target="_blank" rel="noopener" className="text-white/70 hover:text-brand-green-lime transition-colors">Facebook</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase text-brand-green-lime text-xs tracking-[0.3em] mb-8 font-black">Transparência</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/50">
              <li className="hover:text-brand-green-lime transition-colors">
                <Link to="/#transparencia">Transparência</Link>
              </li>
              <li className="hover:text-brand-green-lime transition-colors">
                <Link to="/#privacidade" className="flex items-center gap-2">
                  Privacidade <Shield className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase text-brand-green-lime text-xs tracking-[0.3em] mb-8 font-black">Identificação</h4>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 shadow-sm">
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">Deputado Distrital</div>
              <div className="text-4xl font-display text-brand-green-lime mb-4 font-black">43222</div>
              <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest">CNPJ: 68.456.103/0001-02</div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Informativo Eleitoral</span>
            <p className="text-xs text-white/40 max-w-md font-medium leading-relaxed">
              Federação Brasil Esperança (PT - PV e PCdoB) - Eleição 2026. Jean Carlos Sousa - Deputado Distrital 43222.
              CNPJ: 68.456.103/0001-02 - Partido Verde.
            </p>
            <p className="text-[10px] text-white/30 max-w-md font-medium">
              Propaganda Eleitoral Antecipada - Informativo Institucional em conformidade com as normas do TSE.
            </p>
          </div>

          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link to="/#privacidade" className="hover:text-brand-green-lime transition-colors">Privacidade</Link>
            <span className="text-white/20">|</span>
            <span>Brasília-DF</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.5em]">Cultura • Música • Comunidade</div>
        </div>
      </div>
    </footer>
  );
}