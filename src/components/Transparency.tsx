import { FileText, Link as LinkIcon, ShieldCheck, MessageCircle } from 'lucide-react';

export function Transparency() {
  const documents = [
    { title: 'Registro Eleitoral', type: 'Justiça Eleitoral' },
    { title: 'Prestação de Contas', type: 'TSE / Portal' },
    { title: 'Plano de Metas', type: 'PDF Institucional' },
    { title: 'Notas Oficiais', type: 'Comunicados' },
  ];

  return (
    <section id="transparencia" className="py-24 px-5 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div>
            <span className="text-brand-green-deep font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Transparência</span>
            <h2 className="text-4xl md:text-5xl font-display uppercase text-brand-black mb-8 leading-tight font-black">
              Gestão com <br />
              <span className="text-brand-green-deep">Verdade</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              Acreditamos que a política deve ser aberta e transparente. Aqui você acessa todas as informações oficiais sobre nossa caminhada.
            </p>

            <div className="p-8 bg-white rounded-[2.5rem] shadow-brand border-l-8 border-brand-green-vibrant">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">CNPJ Oficial</div>
              <div className="text-3xl font-display text-brand-green-deep font-black">68.456.103/0001-02</div>
              <div className="mt-8 flex items-center gap-3 text-brand-green-deep">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest">Informações em Conformidade com o TSE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-brand-green-vibrant transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-brand-gray rounded-2xl flex items-center justify-center text-gray-400 mb-6 group-hover:bg-brand-green-vibrant/10 group-hover:text-brand-green-deep transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display uppercase text-brand-black mb-2 font-bold">{doc.title}</h3>
                  <p className="text-[10px] font-bold text-brand-green-deep uppercase tracking-widest">{doc.type}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-300 uppercase">[INSERIR LINK]</span>
                  <LinkIcon className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export function Participation() {
  return (
    <section className="py-24 px-5 bg-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-20 h-20 bg-brand-green-deep rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
          <MessageCircle className="w-10 h-10 text-brand-green-vibrant animate-pulse" />
        </div>
        <h2 className="text-4xl md:text-7xl font-display font-black uppercase text-brand-black mb-10 leading-[0.9] tracking-tighter">
          Entre para o nosso <br />
          <span className="text-brand-green-deep underline decoration-brand-green-vibrant underline-offset-8">Time da Cultura</span>
        </h2>
        <p className="text-gray-600 text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Participe do nosso grupo oficial no WhatsApp e ajude a construir o futuro cultural de Brasília. Informação direta e participação real.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://wa.me/5561995210111" 
            className="bg-brand-green-deep text-white px-12 py-6 rounded-[2rem] font-bold text-base uppercase tracking-widest shadow-brand hover:scale-105 transition-all"
          >
            Acessar Grupo Oficial
          </a>
          <a 
            href="https://instagram.com/jeandacultura" 
            target="_blank"
            className="bg-brand-gray border-2 border-brand-green-deep text-brand-green-deep px-12 py-6 rounded-[2rem] font-bold text-base uppercase tracking-widest hover:bg-brand-green-deep hover:text-white transition-all"
          >
            Ver no Instagram
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-40">
          <div className="text-[10px] font-bold uppercase tracking-widest">Respeito</div>
          <div className="text-[10px] font-bold uppercase tracking-widest">Verdade</div>
          <div className="text-[10px] font-bold uppercase tracking-widest">Ação</div>
          <div className="text-[10px] font-bold uppercase tracking-widest">Cultura</div>
        </div>
      </div>
    </section>
  );
}
