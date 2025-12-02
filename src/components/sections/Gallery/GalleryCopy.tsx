'use client';
import React, { useState } from 'react';

import { classNames } from '../../../lib/classNames';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <section className="text-black border-t border-gray-200 body-font">
      <div className="flex flex-col-reverse flex-wrap px-5 pt-24 mx-auto lg:flex-row-reverse">
        <div className="w-full mt-10 mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0 lg:mt-0">
          <div className="w-full h-full ">
            <div className="grid w-full grid-cols-1 gap-4 px-2 m-auto sm:grid-cols-2 md:px-5 ">
              <GalleryItem
                src="/assets/img/gallery/Gallery1.png"
                alt="Teknofest Startup Competition 2023"
              />
              <GalleryItem
                src="/assets/img/gallery/Gallery2.png"
                alt="Caksa at KBRI Ankara - Turkey"
              />
              <GalleryItem
                src="/assets/img/gallery/Gallery3.png"
                alt="Teknofest - Ankara 2023"
              />
              <GalleryItem
                src="/assets/img/gallery/Gallery4.png"
                alt="Caksa UAV trial - Raci, Pasuruan"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap text-center font-poppins lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight text-center md:text-left md:leading-normal">
            Our{' '}
            <span className="text-[#F58A07] italic font-bold font-poppins">
              Unforgettable
            </span>
            <br />
            Journey in Images
          </h1>
          <h3 className="max-w-2xl pt-4 text-lg font-normal leading-tight text-justify md:pt-12 md:mt-10 lg:text-2xl">
            Embark on a visual journey through the moments that define us. Our
            gallery captures the essence of our team&apos;s passion, dedication,
            and triumphs. Each image tells a story of innovation and
            camaraderie.
          </h3>
          <h4 className="max-w-2xl pt-4 text-lg leading-tight text-justify md:pt-8 lg:text-2xl">
            To dive deeper into our visual chronicles, explore more on our
            Instagram. Join us in celebrating the vibrant snapshots that make up
            our incredible journey.
          </h4>
          <div className="justify-center hidden w-full pt-4 lg:flex md:pt-12 md:justify-start font-poppins">
            <a
              href="https://www.instagram.com/caksaeepis/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              className="group border-2 border-[#F58A07] text-[#F58A07] rounded-md px-4 py-2 md:px-4 md:py-4 flex items-center gap-2 hover:bg-[#F58A07] focus:ring-4 focus:outline-white-100 focus:ring-white-300 hover:text-white"
            >
              <p>Explore Our Instagram</p>
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
      <div className="flex justify-center w-full pt-4 lg:hidden md:pt-12 md:justify-start font-poppins">
        <a
          href="https://www.instagram.com/caksaeepis/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="group border-2 border-[#F58A07] text-[#F58A07] rounded-md px-4 py-2 md:px-4 md:py-4 flex items-center gap-2 hover:bg-[#F58A07] focus:ring-4 focus:outline-white-100 focus:ring-white-300 hover:text-white"
        >
          <p>Explore Our Instagram</p>
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
    </section>
  );
};

export default Gallery;
