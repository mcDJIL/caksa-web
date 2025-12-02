'use client';
import React from 'react';

import Hero from '../../components/sections/Home/Hero';
import Video from '../../components/sections/Home/Video';
import Partner from '../../components/sections/Home/Partner';
import Team from '../../components/sections/Home/Team';
import OurUav from '@/src/components/sections/Home/OurUav';
import News from '@/src/components/sections/Home/News';
import Achivement from '@/src/components/sections/Home/Achivement';

const Homepage = () => {
  return (
    <>
      <Hero
        img="/assets/img/banner/banner-home.png"
        alt="hero banner"
        heading={
          <>
            <div className="px-2 py-2 md:hidden bg-gradient-to-r from-cyan-500 to-blue-500">
              <h3 className="text-sm font-bold text-white font-poppins lg:text-xl">
                Greetings!
              </h3>
            </div>
            <div className="relative z-10">
              <div className="absolute hidden px-2 py-2 md:block -z-10 -top-5 -left-11 -rotate-12 bg-gradient-to-r from-cyan-500 to-blue-500">
                <h3 className="text-sm font-bold text-white font-poppins lg:text-xl">
                  Greetings!
                </h3>
              </div>
              <div className="z-50 w-full text-center">
                <h1 className="z-10 text-5xl font-bold leading-normal text-white font-poppins lg:text-7xl">
                  We are <br className="md:hidden" />
                  <span className="text-[#F58A07] italic">CAKSA</span> Team.
                </h1>
              </div>
            </div>
          </>
        }
        paragraph={
          <p className="text-white font-poppins text-xs md:text-base lg:text-lg w-[90%] text-center">
            Cakrawala Skala (CAKSA) is an International Team at Politeknik
            Elektronika Negeri Surabaya (PENS) <br />
            that focuses on Research and development of Unmanned Aerial Vehicle
            (UAV) Technology since 2022.{' '}
          </p>
        }
        isHome={true}
      />
      <OurUav />
      <Video />
      <Partner />
      <Team />
      <News />
      <Achivement />
    </>
  );
};

export default Homepage;
