'use client';
import React from 'react';

import Hero from '../../components/sections/Home/Hero';
import Gallery from '../../components/sections/Gallery/Gallery';
import UAVHallOfFame from '@/src/components/sections/Gallery/UAVHallOfFame';

const GalleryPage = () => {
  return (
    <>
      <Hero
        img="/assets/img/banner/banner-gallery.png"
        alt="hero banner"
        heading={
          <h1 className="text-4xl italic font-bold text-center text-white top-20 lg:text-7xl">
            Cakrawala <br className="md:hidden" />
            Skala
          </h1>
        }
        paragraph={
          <>
            <div className="border-[1px] border-white mx-auto h-20 md:h-32"></div>
            <p className="text-white text-base lg:text-[22px] w-[815px] text-center">
              Visual Chronicles: Our Journey <br className="md:hidden" /> in
              Captivating Moments
            </p>
          </>
        }
        isHome={false}
      />

      <Gallery />
      <UAVHallOfFame />
    </>
  );
};

export default GalleryPage;
