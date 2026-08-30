import { CultureHeader } from '../components/culture/CultureHeader';
import { CultureHero } from '../components/culture/CultureHero';
import { CultureJourney } from '../components/culture/CultureJourney';
import { HipHopSection } from '../components/culture/HipHopSection';
import { FlashbackSection } from '../components/culture/FlashbackSection';
import { CultureDFSection } from '../components/culture/CultureDFSection';
import { CultureTopics } from '../components/culture/CultureTopics';
import { CultureParticipation } from '../components/culture/CultureParticipation';
import { CultureCTA } from '../components/culture/CultureCTA';
import { CultureFooter } from '../components/culture/CultureFooter';
import { CookieBanner } from '../components/CookieBanner';
import { useSEO } from '../hooks/useSEO';
import { SITE_URL } from '../config/site';

export function CulturePage() {
  useSEO({
    title: 'Jean da Cultura | Cultura, Música e Comunidade no Distrito Federal',
    description:
      'Conheça a trajetória de Jean da Cultura na música, no Hip-Hop, na produção cultural e nas ações comunitárias do Distrito Federal.',
    canonicalPath: `${SITE_URL}/cultura`,
    ogImage: `${SITE_URL}/link-site-jean-da-cultura.png`,
  });

  return (
    <div className="min-h-screen bg-brand-black">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-green-lime focus:text-brand-green-deep focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Pular para o conteúdo
      </a>

      <CultureHeader />

      <main id="conteudo">
        <CultureHero />
        <CultureJourney />
        <HipHopSection />
        <FlashbackSection />
        <CultureDFSection />
        <CultureTopics />
        <CultureParticipation />
        <CultureCTA />
      </main>

      <CultureFooter />
      <CookieBanner />
    </div>
  );
}