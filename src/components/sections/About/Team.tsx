'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import { carousel, nontechnical, technical } from '../../../data/about.constant';

const leader = '/assets/img/team/leader/leader.png';
const advisor = '/assets/img/team/advisor/advisor.png';

const Team = () => {
  const [onHover, setOnHover] = useState(false);
  const [onActive, setOnActive] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#121212] py-20 px-5 lg:px-10 xl:px-20 2xl:px-[90px]">
      <div className="relative font-poppins">
        <div className="flex flex-col justify-between py-4 pr-5 border-t-4 border-r-4 lg:flex-row rounded-tr-2xl lg:text-2xl border-white">
          <h1 className="font-semibold text-[20px] sm:text-[30px] lg:text-[40px] text-[#F58A07] italic">
            Our Dedicated Team Members{' '}
          </h1>
          <h1 className="text-white font-semibold text-[20px] md:text-[28px] lg:text-[32px]">2025/2026</h1>
        </div>
        <h1 className="absolute -top-4 sm:-top-6 lg:-top-8 left-0 text-white font-semibold text-[20px] sm:text-[30px] lg:text-[40px] pr-5 bg-[#121212]">
          Meet the Sky Pioneers:{' '}
        </h1>
      </div>

      <div className="relative w-full font-poppins mt-14 lg:mt-20 ">
        <div className="flex justify-end w-full">
          <h1 className="text-[#F58A07] font-bold text-xl lg:text-base xl:text-xl 2xl:text-2xl italic py-3">
            Team Advisor & Leader
          </h1>
        </div>
        <div className="w-full py-10 px-8 bg-linear-to-r from-[#282624] to-transparent">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Advisor Text - Left */}
            <div className="flex-1 text-center md:text-right text-white pr-4">
              <p className="hidden lg:block lg:text-[10px] xl:text-xs 2xl:text-base">
                "As the advisor of CAKSA, I am proud to guide this talented team. Together, we push boundaries and explore new horizons in UAV technology."
              </p>
              <div className="mt-7">
                <h1 className="font-bold lg:text-3xl">Advisor Name</h1>
                <h3 className="text-sm lg:text-xl">
                  Team Advisor
                </h3>
              </div>
            </div>

            {/* Images - Center */}
            <div className="relative flex items-end justify-center gap-1 flex-shrink-0">
              {/* Advisor Image */}
              <div className="relative group flex items-center justify-center">
                <img
                  src={advisor}
                  alt="advisor"
                  title="Advisor"
                  className="w-[200px] md:w-[280px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  loading="lazy"
                />
                <span
                  className="pointer-events-none z-10 absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out bg-black/80 text-white px-3 py-1 rounded-md text-md shadow-md"
                >
                  Advisor
                </span>
              </div>

              {/* Leader Image */}
              <div className="relative group flex items-center justify-center">
                <img
                  src={leader}
                  alt="leader"
                  title="Leader"
                  className="w-[200px] md:w-[280px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  loading="lazy"
                />
                <span
                  className="pointer-events-none z-10 absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out bg-black/80 text-white px-3 py-1 rounded-md text-md shadow-md"
                >
                  Leader
                </span>
              </div>
            </div>

            {/* Leader Text - Right */}
            <div className="flex-1 text-center md:text-left text-white pl-4">
              <p className="hidden lg:block lg:text-[10px] xl:text-xs 2xl:text-base">
                "Embracing the skies with a spirit of innovation, I am honored to lead the CAKSA team. Together, we navigate uncharted territories, fueled by dedication and a shared vision for UAV excellence."
              </p>
              <div className="mt-7">
                <h1 className="font-bold lg:text-3xl">Ahmad Maulana Maghrobi</h1>
                <h3 className="text-sm lg:text-xl">
                  3rd Year Computer <br className="md:hidden" />
                  Engineering
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative mt-40 lg:px-10 xl:px-20 2xl:px-[90px]">
        <div className="relative flex w-full">
          <div className="absolute top-2.5 sm:-top-1">
            <h1 className="bg-[#121212] font-poppins w-fit pr-8 text-[#F58A07] font-semibold text-[24px] sm:text-[30px] lg:text-[40px]">
              Technical
            </h1>
          </div>

          <div className="flex justify-end w-full pt-5 mt-6 border-t-8 border-b-8 border-r-8 rounded-tr-3xl rounded-br-3xl pr-7 border-white">
            <div className="grid w-full grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
              {technical.map((t, idx) => (
                <div key={idx} className="row-span-1 flex flex-col items-center justify-center cursor-pointer">
                <div className="relative group flex justify-center">
                  <div className="absolute bottom-0 z-0 h-44 w-[300px] bg-[#161616] transition-colors duration-300 ease-in-out group-hover:bg-[#043D6A]"></div>
                  <img
                    src={t.img}
                    alt={t.major}
                    className="w-[300px] relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute z-20 top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent font-bold text-lg sm:text-3xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 [-webkit-text-stroke:1px_white] drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
                    {t.major}
                  </div>

                </div>

                <div className="bg-white px-4 py-2 w-[260px] sm:w-[300px] rounded-br-2xl">
                  <p className='font-semibold text-[20px] sm:text-[22px] text-black'>{t.name}</p>
                  <p className='font-semibold text-base sm:text-lg text-[#F58A07]'>{t.position}</p>
                </div>

              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative mt-40  px-5 lg:px-10 xl:px-20 2xl:px-[90px]">
        <div className="relative flex w-full">
          <div className="absolute flex justify-end w-full">
            <h1 className="bg-[#121212] font-poppins w-fit pl-8 text-[#F58A07] font-semibold text-[24px] sm:text-[30px] lg:text-[40px]">
              Non-Technical
            </h1>
          </div>

          <div className="flex justify-end w-full pt-5 mt-6 border-t-8 border-b-8 border-l-8 rounded-tl-3xl rounded-bl-3xl pl-7 border-white">
            <div className="grid w-full grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
              {nontechnical.map((t, idx) => (
                <div key={idx} className="row-span-1 flex flex-col items-center justify-center cursor-pointer">
                <div className="relative group flex justify-center">
                  <div className="absolute bottom-0 z-0 h-44 w-[300px] bg-[#161616] transition-colors duration-300 ease-in-out group-hover:bg-[#043D6A]"></div>
                  <img
                    src={t.img}
                    alt={t.major}
                    className="w-[300px] relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute z-20 top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent font-bold text-lg sm:text-3xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 [-webkit-text-stroke:1px_white] drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
                    {t.major}
                  </div>

                </div>

                <div className="bg-white px-4 py-2 w-[260px] sm:w-[300px] rounded-br-2xl">
                  <p className='font-semibold text-[20px] sm:text-[22px] text-black'>{t.name}</p>
                  <p className='font-semibold text-base sm:text-lg text-[#F58A07]'>{t.position}</p>
                </div>

              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-40 lg:px-20">
        <div className="relative flex w-full ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            spaceBetween={300}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {carousel.map((c, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={c.img}
                  alt="story"
                  className="w-full"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <img src={slide2} alt="" className="w-full" loading="lazy" />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
