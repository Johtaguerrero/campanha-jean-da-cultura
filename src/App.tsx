import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { Culture, Themes } from './components/Themes';
import { Proposals, Regions } from './components/Regions';
import { Transparency, Participation } from './components/Transparency';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Culture />
        <Themes />
        <Regions />
        <Proposals />
        <Transparency />
        <Participation />
        <PrivacyPolicy />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
