import { Hero } from '../components/Hero';

import { HomeProducts } from '../components/home/HomeProducts';
import { HomeHowItWorks } from '../components/home/HomeHowItWorks';
import { HomeFAQ } from '../components/home/HomeFAQ';
import { HomeCTA } from '../components/home/HomeCTA';

export function Home() {
  return (
    <>
      <Hero />

      <HomeProducts />
      <HomeHowItWorks />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
