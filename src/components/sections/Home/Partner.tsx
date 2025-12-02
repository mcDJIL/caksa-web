import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { carousel } from '../../../data/home.constant';
import { useEffect } from 'react';

const Partner = () => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-6 gap-5 font-poppins pb-14 lg:mb-20 lg:px-10 xl:px-20 2xl:px-[117px]">
      <div className="col-span-6 lg:col-span-1">
        <h1 className="font-bold text-2xl px-5 lg:px-0 lg:text-[40px] leading-[54px]">
          Partners <br className="hidden md:block" /> Behind{' '}
          <span className="text-[#F58A07]">Us</span>
        </h1>
      </div>
      <div className="flex items-center col-span-6 px-5 lg:col-span-5">
        <Swiper
          breakpoints={{
            375: {
              // width: 375,
              slidesPerView: 2,
            },
            576: {
              // width: 576,
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          autoplay={{
            delay: 0,
          }}
          speed={2000}
          loop={true}
          modules={[Grid, Autoplay]}
          className="flex items-center mySwiper"
        >
          {carousel.map((c, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={c.src}
                alt={c.alt}
                className="w-auto bg-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
