import Link from 'next/link';
import React from 'react';
import ReactCurvedText from 'react-curved-text';

interface HeroProps {
    img: string;
    alt: string;
    heading: React.ReactNode;
    paragraph: React.ReactNode;
    isHome?: boolean;
}

const Hero = ({ img, alt, heading, paragraph, isHome } : HeroProps) => {
  return (
    <div className="relative mx-[17px] pt-[17px] font-poppins flex justify-center">
      <img
        src={img}
        alt={alt}
        className="w-full bg-center object-cover rounded-2xl h-[800px]"
        loading="lazy"
      />
      <div className="absolute flex flex-col top-14 gap-7 justify-center items-center w-full h-[80%] md:top-28 ">
        {heading}
        {paragraph}
        {isHome ? (
          <div>
            <Link
              href="/about"
              className="group flex font-inter justify-between items-center w-full text-white border-2 border-white hover:bg-[#F58A07] focus:ring-4 focus:outline-white-100 focus:ring-white-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center gap-2"
            >
              Read Our Story
              <span>
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
              </span>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="absolute bottom-10 lg:right-14 bg-gradient-to-b from-[#FFFFFF4D] t0-[#FFFFFF1A] rounded-full flex justify-end ">
        <div className="relative flex items-center justify-center">
          <img
            className="w-[20%] absolute"
            src="/assets/img/logo/logo-white.png"
            alt="logocaksa"
            loading="lazy"
          />
          <div className="animate-spin-slow">
            <ReactCurvedText
                width={120}
                height={120}
                cx={60}
                cy={60}
                rx={35}
                ry={35}
                startOffset={20}
                reversed
                text="cakrawala skala"
                textProps={{ style: { fontSize: 18, letterSpacing: 3 } }}
                textPathProps={{ fill: '#fff' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
