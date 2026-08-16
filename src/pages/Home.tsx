import { Hero } from '../components/Hero';

import { HomeProducts } from '../components/home/HomeProducts';
import { HomeAudience } from '../components/home/HomeAudience';
import { HomeHowItWorks } from '../components/home/HomeHowItWorks';
import { HomeWhyUs } from '../components/home/HomeWhyUs';
import { HomeFAQ } from '../components/home/HomeFAQ';
import { HomeCTA } from '../components/home/HomeCTA';

export function Home() {
  return (
    <>
      <Hero />

      <HomeProducts />
      <HomeAudience />
      <HomeHowItWorks />
      <HomeWhyUs />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
