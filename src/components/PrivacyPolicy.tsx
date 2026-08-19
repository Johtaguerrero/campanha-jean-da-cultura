import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <section id="privacidade" className="py-24 px-5 bg-brand-gray border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-brand-green-deep rounded-2xl flex items-center justify-center text-brand-green-vibrant">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-display font-black uppercase text-brand-black tracking-tight">
            Política de <span className="text-brand-green-deep">Privacidade</span>
          </h2>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-brand border border-gray-100 space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-brand-green-deep" />
              <h3 className="text-xl font-bold text-brand-black">Transparência e Ética</h3>
            </div>
            <p className="text-gray-600 leading-relaxed font-medium">
              Este portal é informativo e institucional. Não realizamos coleta excessiva de dados, perfilização política ou segmentação de visitantes. Nosso compromisso é com a verdade e o respeito à sua privacidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-brand-gray rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-5 h-5 text-brand-green-deep" />
                <h4 className="font-bold text-brand-black uppercase text-xs tracking-widest">O que vemos?</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Apenas dados técnicos básicos de navegação (como tipo de navegador e tempo de sessão) para melhorar a performance do site, de forma totalmente anônima.
              </p>
            </div>
            <div className="p-6 bg-brand-gray rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-brand-green-deep" />
                <h4 className="font-bold text-brand-black uppercase text-xs tracking-widest">O que NÃO fazemos?</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Não coletamos CPFs, e-mails ou preferências políticas sem seu consentimento expresso. Não usamos cookies de rastreamento de terceiros.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h4 className="text-sm font-bold text-brand-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-vibrant" />
              Conformidade Eleitoral
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Em total conformidade com a Lei Geral de Proteção de Dados (LGPD) e as resoluções do Tribunal Superior Eleitoral (TSE). Todas as informações aqui presentes são de caráter público e destinadas à transparência informativa da pré-candidatura de Jean Carlos Sousa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
