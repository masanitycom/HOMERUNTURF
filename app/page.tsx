import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Services from './components/Services';
import Mechanism from './components/Mechanism';
import Results from './components/Results';
import HowToUse from './components/HowToUse';
import FAQ from './components/FAQ';
import Message from './components/Message';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Concept />
      <Services />
      <Mechanism />
      <Results />
      <HowToUse />
      <FAQ />
      <Message />
      <Footer />
    </main>
  );
}
