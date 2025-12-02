import React from 'react';

const Figure = () => {
  return (
    <div className="w-full relative h-[500px]">
      <img
        src="/assets/img/figure/bjhabibie.png"
        alt="B.J. Habibie"
        className="absolute flex-shrink-0 object-cover w-full h-full"
        loading="lazy"
      />
      <div className="absolute top-0 flex items-center justify-center w-full h-full px-2">
        <div className="font-inter">
          <p className="text-white font-[350] text-center italic text-[18px] lg:text-base xl:text-xl 2xl:text-3xl ">
            “We must be acutely aware that strategic industries,
            <br className="hidden lg:block" /> particularly the aerospace
            sector, are timeless <br className="hidden lg:block" /> products
            essential for Indonesia&apos;s progress.”
          </p>
          <h1 className="text-white font-[600] text-center italic lg:text-base xl:text-xl 2xl:text-3xl mt-10">
            - B.J. Habibie
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Figure;
