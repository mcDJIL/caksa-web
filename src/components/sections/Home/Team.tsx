import React from 'react';
import Link from 'next/link';
import ReactCurvedText from 'react-curved-text';

const Team = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 py-16 lg:px-10 xl:px-20 2xl:px-[117px] w-full relative bg-black">
      <div className="flex flex-col items-start justify-center py-10">
        <h1 className="font-bold font-poppins text-[40px] leading-tight lg:text-[25px] xl:text-[35px] 2xl:text-[50px] text-white">
          Unveiling <br /> Our{' '}
          <span className="text-[#F58A07] italic font-bold">
            {' '}
            <br className="hidden lg:block" /> Division
          </span>
        </h1>
        <div className="w-fit my-4 bg-gradient-to-b from-[#FFFFFF4D] t0-[#FFFFFF1A] rounded-full lg:flex justify-center hidden">
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/img/logo/logo-white.png"
              alt="logocaksa"
              loading="lazy"
              className="w-[20%] absolute"
            />
            <div className="animate-spin-slow">
              <ReactCurvedText
                width={100}
                height={100}
                cx={50}
                cy={50}
                rx={25}
                ry={25}
                startOffset={20}
                reversed={true}
                text="cakrawala skala"
                textProps={{ style: { fontSize: 14.2, letterSpacing: 3 } }}
                textPathProps={{ fill: '#fff' }}
              />
            </div>
          </div>
        </div>
        <Link
          href="/about"
          className="group font-inter hidden lg:flex items-center gap-2 px-3 py-3 text-xl xl:text-md 2xl:text-xl text-white border-2 border-white rounded-md hover:bg-[#F58A07] whitespace-nowrap"
        >
          Get to know us better!
          <svg
            className="transition-all duration-200 ease-linear group-hover:rotate-45"
            width="16"
            height="16"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8253 1.01732C10.8253 0.741182 10.6015 0.517325 10.3253 0.517325L5.82533 0.517325C5.54918 0.517325 5.32533 0.741183 5.32533 1.01732C5.32533 1.29347 5.54918 1.51732 5.82533 1.51732L9.82533 1.51732L9.82533 5.51732C9.82533 5.79347 10.0492 6.01732 10.3253 6.01732C10.6015 6.01732 10.8253 5.79347 10.8253 5.51732L10.8253 1.01732ZM1.1569 10.8929L10.6789 1.37088L9.97177 0.663772L0.449791 10.1858L1.1569 10.8929Z"
              fill="#fff"
            />
          </svg>
        </Link>
      </div>

      <div className="flex justify-center h-full">
        <div className="flex flex-col lg:w-[300px] xl:w-[380px] 2xl:w-[450px] space-y-6">
          <div className="w-full">
            <img
              src="/assets/img/team/technical-home.png"
              alt="team-technical"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="w-full pr-10 pb-10 text-justify rounded-br-xl border-b-4 border-r-4 border-[#084887] h-full">
            <h1 className="text-white font-inter font-[700] text-2xl lg:text-md xl:text-bas 2xl:text-xl">
              Technical
            </h1>
            <p className="text-white font-inter lg:text-[10px] xl:text-sm 2xl:text-[15px] pt-2">
              Innovation takes flight with our Technical Division, where
              engineering expertise propels our UAV technology to new heights.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-full">
        <div className="flex flex-col lg:w-[300px] xl:w-[380px] 2xl:w-[450px] space-y-6">
          <div className="w-full">
            <img
              src="/assets/img/team/non_technical-home.png"
              alt="team-non-technical"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="w-full pr-10 pb-10 text-justify rounded-br-xl border-b-4 border-r-4 border-[#084887]">
            <h1 className="text-white font-inter font-[700] text-2xl lg:text-md xl:text-bas 2xl:text-xl">
              Non-Technical
            </h1>
            <p className="text-white font-inter lg:text-[10px] xl:text-sm 2xl:text-[15px] pt-2">
              Behind every successful mission, our Non-Technical Division
              ensures seamless coordination, handling logistics and
              communication with precision.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 lg:hidden">
        <Link
          href="/about"
          className="group font-inter flex items-center gap-2 px-3 py-3 text-xl xl:text-md 2xl:text-xl text-white border-2 border-white rounded-md hover:bg-[#F58A07] whitespace-nowrap"
        >
          Get to know us better!
          <svg
            className="transition-all duration-200 ease-linear group-hover:rotate-45"
            width="16"
            height="16"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8253 1.01732C10.8253 0.741182 10.6015 0.517325 10.3253 0.517325L5.82533 0.517325C5.54918 0.517325 5.32533 0.741183 5.32533 1.01732C5.32533 1.29347 5.54918 1.51732 5.82533 1.51732L9.82533 1.51732L9.82533 5.51732C9.82533 5.79347 10.0492 6.01732 10.3253 6.01732C10.6015 6.01732 10.8253 5.79347 10.8253 5.51732L10.8253 1.01732ZM1.1569 10.8929L10.6789 1.37088L9.97177 0.663772L0.449791 10.1858L1.1569 10.8929Z"
              fill="#fff"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Team;
