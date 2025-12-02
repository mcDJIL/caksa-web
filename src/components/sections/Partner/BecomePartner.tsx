'use client';
import React, { useState } from 'react';

import { classNames } from '../../../lib/classNames';

const BecomePartner = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-14 px-10 lg:px-10 xl:px-20 2xl:px-[90px] mt-16">
      <div className="flex-1">
        <img
          src="/assets/img/partner/Partner.png"
          alt=""
          className="hidden w-full bg-center bg-cover lg:block"
          loading="lazy"
        />
      </div>
      <div className="flex-1 font-poppins">
        <h1 className="text-4xl lg:text-5xl leading-9 font-bold italic w-auto md:w-[600px]">
          Become <span className="text-[#F58A07]">Our Partner</span> <br />
          to Embrace the Future
        </h1>
        <img
          src="/assets/img/partner/Partner.png"
          alt=""
          className="w-full mt-10 bg-center bg-cover lg:hidden"
          loading="lazy"
        />
        <p className="pt-16 text-lg leading-8">
          Through collaborations, we advance our innovations and push the
          boundaries of UAV technology in Indonesia. Our partners contribute in
          various ways, providing support in knowledge, materials, funding, and
          more. Together, we strive to make the skies brighter and our UAV
          technology more sustainable.
        </p>
        <div className="flex justify-center w-full pt-16 lg:justify-start font-poppins ">
          <a
            href="https://drive.google.com/file/d/1sjfPOvS4alnuUP0gKTu1YvFtDnuAwT58/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            className="border-2 border-[#F58A07] text-[#F58A07] rounded-md px-4 py-4 flex items-center gap-4  hover:bg-[#F58A07] focus:ring-4 focus:outline-white-100 focus:ring-white-300 hover:text-white"
          >
            <p>Become a Partner</p>
            <span>
              <svg
                className={classNames(
                  onHover ? 'rotate-45' : 'rotate-0',
                  'transition-all duration-100 ease-linear'
                )}
                width="16"
                height="16"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8253 1.01732C10.8253 0.741182 10.6015 0.517325 10.3253 0.517325L5.82533 0.517325C5.54918 0.517325 5.32533 0.741183 5.32533 1.01732C5.32533 1.29347 5.54918 1.51732 5.82533 1.51732L9.82533 1.51732L9.82533 5.51732C9.82533 5.79347 10.0492 6.01732 10.3253 6.01732C10.6015 6.01732 10.8253 5.79347 10.8253 5.51732L10.8253 1.01732ZM1.1569 10.8929L10.6789 1.37088L9.97177 0.663772L0.449791 10.1858L1.1569 10.8929Z"
                  fill={onHover ? '#FFFFFF' : '#F58A07'}
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
