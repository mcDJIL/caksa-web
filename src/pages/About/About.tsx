'use client';
import React from 'react';

import Hero from '../../components/sections/Home/Hero';
import Story from '@/src/components/sections/About/Story';
import Vision from '../../components/sections/About/Vision';
import Figure from '../../components/sections/About/Figure';
import Team from '../../components/sections/About/Team';
import Achievement from '@/src/components/sections/Home/Achivement';

const AboutPage = () => {
  return (
    <>
      <Hero
        img="/assets/img/banner/banner-about.png"
        alt="hero banner"
        heading={
          <h1 className="text-4xl italic font-bold text-center text-white lg:text-7xl">
            “Gala Akasa <br className="md:hidden" />
            Wirya Satya”
          </h1>
        }
        paragraph={
          <p className="text-white text-base lg:text-[22px] w-[815px] text-center">
            Unveiling Our Story: Discover the <br className="md:hidden" />
            Vision and Passion Behind Our Team
          </p>
        }
        isHome={false}
      />
      <Story />
      <Vision />
      <Figure />
      <Team />
      <Achievement />
    </>
  );
};

export default AboutPage;
