'use client';
import React, { useState } from 'react';

import { classNames } from '../../../lib/classNames';

const Clev = '/assets/img/partner/clev-innovation-labs.png';
const VideoDjarum = '/assets/video/djarum.mp4';

const PlatinumSupport = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className=" gap-8 px-5 lg:px-10 xl:px-20 2xl:px-[90px] mt-28 mb-20">
      <h1 className="text-4xl italic font-bold text-center font-poppins">
        <span className="text-[#084887]">Platinum </span>Support
      </h1>
      <div className="flex flex-col items-center justify-between gap-20 mt-24 lg:flex-row-reverse">
        <img
          src={Clev}
          alt="platinum support"
          className="bg-center bg-cover w-96 rounded-2xl lg:hidden"
          loading="lazy"
        />
        <div className="flex-1">
          <video
            src={VideoDjarum}
            autoPlay
            loop
            muted
            className="w-full aspect-video"
          ></video>
        </div>
        <div className="flex-1">
          <img
            src={Clev}
            alt=""
            className="hidden bg-center bg-cover w-96 rounded-2xl lg:block"
            loading="lazy"
          />
          <h1 className="w-full mt-5 text-2xl font-bold text-center lg:text-left">
            Clev Innovation Labs
          </h1>
          <p className="text-xl text-justify pt-7">
            Clev Innovation Labs adalah Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus necessitatibus esse asperiores, modi repellat ea fugit tenetur quis voluptate laboriosam veritatis magni, architecto velit, rerum unde ut accusantium non..{' '}
          </p>
          <div className="flex justify-center w-full pt-8 lg:justify-start font-poppins">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              className="border-2 border-[#F58A07] text-[#F58A07] rounded-md px-4 py-4 flex items-center gap-4  hover:bg-[#F58A07] focus:ring-4 focus:outline-white-100 focus:ring-white-300 hover:text-white"
            >
              <p>Company Profile</p>
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
    </div>
  );
};

export default PlatinumSupport;
