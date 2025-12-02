import React from 'react';
import Link from 'next/link';

import { contact, menu, social, year } from '../../data/footer.constant';

const Footer = () => {

  return (
    <footer className="pt-8 bg-white font-poppins">
      <div className="relative w-full">
        <img
          src="/assets/img/footer/union.png"
          alt="bg"
          className="flex-shrink-0 w-full h-auto"
          loading="lazy"
        />

        <div className="absolute top-0 w-full">
          <div className="  pt-10 px-[30x] lg:px-[200px]  w-full text-white  flex flex-col lg:flex-row items-center justify-center gap-5">
            <h1 className="text-center text-md lg:text-xl lg:text-left ">
              Let&apos;s achieve new heights together{' '}
              <br className="lg:hidden" />
              explore collaboration opportunities now!
            </h1>
            <div className="flex items-center justify-center lg:justify-end w-full h-[60px]">
              <a
                href="https://linktr.ee/caksa_team"
                target="_blank"
                rel="noreferrer"
                className="flex items-center font-medium gap-2 px-6 py-2 bg-[#F58A07] text-white rounded-lg"
              >
                Let&apos;s Talk!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M1 9.509H12.17L7.29 14.389C6.9 14.779 6.9 15.419 7.29 15.809C7.68 16.199 8.31 16.199 8.7 15.809L15.29 9.219C15.68 8.829 15.68 8.199 15.29 7.809L8.71 1.209C8.32 0.819004 7.69 0.819004 7.3 1.209C6.91 1.599 6.91 2.229 7.3 2.619L12.17 7.509H1C0.45 7.509 0 7.959 0 8.509C0 9.059 0.45 9.509 1 9.509Z"
                    fill="#F6FAFF"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-[#121212] w-full h-full pt-10 px-[55px] lg:px-[200px] pb-24  ">
            <div className="flex-col hidden gap-10 py-24 lg:flex lg:flex-row border-y-4">
              <div className="">
                <img
                  src="/assets/img/logo/logo-footer.png"
                  alt="logo"
                  className="w-32"
                  loading="lazy"
                />
                <div className="pt-10">
                  <h1 className="text-justify text-white lg:text-xs xl:text-base">
                    CAKSA took part in the International UAV Competition, such
                    as TEKNOFEST in Türkiye. Our team comprises determined and
                    passionate individuals with diverse academic backgrounds.
                  </h1>
                  <h1 className="text-[#F58A07] lg:text-base xl:text-2xl pt-8">
                    caksa2024@gmail.com
                  </h1>
                </div>
              </div>

              <div className="flex flex-col justify-start gap-10 mt-10 md:flex-row">
                <div className="text-white lg:text-xs xl:text-base">
                  <h1 className="font-[600] mb-4">Menu</h1>
                  <div className="flex flex-col space-y-4 text-[#D9D9D9]">
                    {menu.map((m, i) => (
                      <Link href={m.href} className="font-[500]" key={i}>
                        {m.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="text-white lg:text-xs xl:text-base">
                  <h1 className="font-[600] mb-4">Contact</h1>
                  <div className="flex flex-col space-y-4 text-[#D9D9D9]">
                    {contact.map((c, i) => (
                      <Link href={c.href} className="font-[500]" key={i}>
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="text-white lg:text-xs xl:text-base">
                  <h1 className="font-[600] mb-4">Social</h1>
                  <div className="flex flex-col space-y-4 text-[#D9D9D9]">
                    {social.map((s, i) => (
                      <Link href={s.href} className="font-[500]" key={i}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex items-start justify-center w-full  2xl:top-[630px] xl:top-[530px] lg:top-[410px] left-1/2 transform -translate-x-1/2 text-center">
              <h1 className="text-white font-[500] 2xl:text-lg xl:text-base lg:text-sm ">
                Copyright © {year} by CAKSA Team
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
