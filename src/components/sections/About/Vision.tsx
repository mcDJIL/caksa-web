import React from 'react';

const Vision = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row gap-10 items-start w-full py-10 px-5 lg:px-10 xl:px-20 2xl:px-[90px]">
      <div className="w-full lg:w-80">
        <h1 className="text-[#F58A07] text-[30px] lg:text-[40px] font-semibold leading-none font-poppins text-left lg:text-left italic">
          Our Vision
        </h1>
      </div>

      <div className="w-full pb-8 border-b-4 border-white">
        <p className="text-white font-normal text-justify italic text-[20px] lg:text-[25px] tracking-tight font-poppins">
          To lead global innovation in aeronautics, Cakrawala Skala envisions
          shaping the forefront of aviation and UAV technology, contributing to
          a sustainable and interconnected world.
        </p>
      </div>
    </div>
  );
};

export default Vision;
