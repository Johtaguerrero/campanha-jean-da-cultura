import { Instagram, Facebook, MapPin, ExternalLink, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-gray text-brand-black pt-24 pb-12 px-5 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="font-display text-2xl font-black uppercase flex flex-col leading-none mb-6 tracking-tighter">
              <span className="text-brand-green-deep">Jean</span>
              <span className="text-brand-green-vibrant">da Cultura</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Uma trajetória dedicada à cultura, juventude e comunidade no Distrito Federal. Brasília merece essa voz.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/jeandacultura" target="_blank" rel="noopener" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-green-deep shadow-sm hover:bg-brand-green-deep hover:text-white transition-all border border-gray-100">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/jeancarlossousaa" target="_blank" rel="noopener" className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-green-deep shadow-sm hover:bg-brand-green-deep hover:text-white transition-all border border-gray-100">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase text-brand-green-deep text-xs tracking-[0.3em] mb-8 font-black">Mobilização</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><a href="https://wa.me/5561995845093?text=Ol%C3%A1%2C%20Jean%20da%20Cultura%21%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20fazer%20uma%20pergunta%20sobre%20sua%20atua%C3%A7%C3%A3o%20e%20suas%20ideias%20para%20o%20Distrito%20Federal.%20Podemos%20conversar%3F" className="text-brand-green-deep hover:text-brand-green-vibrant transition-colors flex items-center gap-2">Grupo Oficial <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://instagram.com/jeandacultura" className="text-gray-400 hover:text-brand-green-deep transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com/jeancarlossousaa" className="text-gray-400 hover:text-brand-green-deep transition-colors">Facebook</a></li>
              <li><a href="#privacidade" className="text-gray-400 hover:text-brand-green-deep transition-colors flex items-center gap-2">Privacidade <Shield className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase text-brand-green-deep text-xs tracking-[0.3em] mb-8 font-black">Áreas</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              <li className="hover:text-brand-green-deep transition-colors"><a href="#inicio">Home</a></li>
              <li className="hover:text-brand-green-deep transition-colors"><a href="#jean">Biografia</a></li>
              <li className="hover:text-brand-green-deep transition-colors"><a href="#cultura">Atuação</a></li>
              <li className="hover:text-brand-green-deep transition-colors"><a href="#propostas">Propostas</a></li>
              <li className="hover:text-brand-green-deep transition-colors"><a href="#transparencia">Transparência</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase text-brand-green-deep text-xs tracking-[0.3em] mb-8 font-black">Identificação</h4>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Deputado Distrital</div>
              <div className="text-4xl font-display text-brand-green-deep mb-4 font-black">43222</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">CNPJ: 68.456.103/0001-02</div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Informativo Eleitoral</span>
            <p className="text-xs text-gray-400 max-w-md font-medium leading-relaxed">
              Federação Brasil Esperança (PT - PV e PCdoB) - Eleição 2026. Jean Carlos Sousa - Deputado Distrital 43222.
              CNPJ: 68.456.103/0001-02 - Partido Verde.
            </p>
            <p className="text-[10px] text-gray-400/70 max-w-md font-medium">
              Propaganda Eleitoral Antecipada - Informativo Institucional em conformidade com as normas do TSE.
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#privacidade" className="hover:text-brand-green-deep transition-colors">Privacidade</a>
            <span className="text-gray-200">|</span>
            <span>Brasília-DF</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.5em]">Transparência • Ética • Compromisso</div>
        </div>
      </div>
    </footer>
  );
}
