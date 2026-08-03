import { Hero } from '../components/Hero';
import { VSL } from '../components/VSL';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FAQ />
      <CTA />
    </>
  );
}
