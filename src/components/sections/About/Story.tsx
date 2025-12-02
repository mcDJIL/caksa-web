import React from 'react';

const Story = () => {
  return (
    <div className="relative w-full py-20 px-5 lg:px-10 xl:px-20 2xl:px-[90px]">
      <div className="relative">
        <div className="absolute flex justify-end w-full -mt-7 font-poppins">
          <h1 className="text-[40px] font-[600] text-[#F58A07] bg-white pl-6">
            Our Story
          </h1>
        </div>
        <div className="w-full border-t-8 border-l-8 border-b-8 border-[#084887] rounded-tl-xl rounded-bl-xl flex py-8 pl-8">
          <div className="flex flex-col items-center w-full gap-2 lg:flex-row lg:gap-10 ">
            <div className="flex flex-col space-y-3 lg:w-5/12">
              <div className="flex justify-between w-full">
                <img
                  src="/assets/img/story/story1.png"
                  alt=""
                  className="w-[48%] pointer-events-none"
                  loading="lazy"
                />
                <img
                  src="/assets/img/story/story2.png"
                  alt=""
                  className="w-[48%] pointer-events-none"
                  loading="lazy"
                />
              </div>
              <div className="w-full">
                <img
                  src="/assets/img/story/story3.png"
                  alt=""
                  className="w-full pointer-events-none "
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col font-poppins mt-10 lg:mt-0 gap-3 lg:w-7/12 justify-between text-[18px] font-[500] ">
              <p className="leading-tight text-justify">
                Welcome to CAKSA - the soaring heart of innovation under the
                wings of Politeknik Elektronika Negeri Surabaya. Our team&apos;s
                spirit is encapsulated in the Sanskrit tagline “GALA AKASA WIRYA
                SATYA” a beacon of our ambition to conquer the skies with valor.
              </p>

              <p className="leading-tight text-justify">
                Since 2022, CAKSA has been passionately crafting Unmanned Aerial
                Vehicles (UAVs), an evolution from the pioneering days of the
                PENS Aeronautics team, actively competing in the national KRTI
                (Indonesian Flying Robot Contest) since 2007.
              </p>

              <p className="leading-tight text-justify">
                Our CAKSA family is a harmonious blend of technical brilliance
                and non-technical prowess. The technical division delves into
                mechanics, hardware, software, and vision, while the
                non-technical division expertly manages branding, sponsorship,
                and administration. Guided by dedicated Project Managers and
                Team Leaders, our journey is further enriched by the mentorship
                of three seasoned lecturers with deep expertise in Unmanned
                Aerial Vehicles (UAV). Ready to witness the skies with us?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
