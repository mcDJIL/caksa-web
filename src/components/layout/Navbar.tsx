'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { navbarLink } from '../../data/navbar.constant';
import styles from '../../styles/navbar.module.css';
import Link from 'next/link';
import { classNames } from '../../lib/classNames';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    // Keep page at top on reload
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.onbeforeunload = null;
    };
  }, [prevScrollPos]);

  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    setIsOpen(!isOpen);

    if (isOpen) {
      hamburger?.classList.remove('hamburger-active');
      navMenu?.classList.add('hidden');
    } else {
      hamburger?.classList.add('hamburger-active');
      navMenu?.classList.remove('hidden');
    }
  };

  const navbarStyle = {
    transition: 'top 1s',
    top: isVisible ? '20px' : '-140px', // Change the value for different hide/show effect
  };

  return (
    <header style={navbarStyle} className="fixed z-50 w-full">
      <div className="mx-8 my-5 md:mx-14 md:my-8 lg:mx-16 lg:my-9">
        <div className="w-full p-1 lg:p-0 bg-[#121212]/50 border-gray-200 rounded-lg">
          <div className="relative flex items-center justify-between">
            <div className="lg:px-7 lg:py-1 sm:px-4 ">
              <Link href="/">
                <img
                  src="/assets/img/logo/logo-navbar.png"
                  alt="logo"
                  className="w-32 cursor-pointer"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="flex items-center w-full px-0">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="absolute block right-4 lg:hidden"
                onClick={hamburgerHandler}
              >
                <span
                  className={`hamburger-line origin-top-left transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`hamburger-line transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`hamburger-line origin-bottom-left transition duration-300 ease-in-out`}
                ></span>
              </button>

              <nav
                id="navMenu"
                className="hidden absolute py-4 bg-[#121212]/50 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-20 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <div className="flex flex-col justify-between w-full lg:items-center lg:flex-row">
                  <ul className="block lg:flex">
                    {navbarLink.map((l, idx) => (
                      <li className="group" key={idx}>
                        <Link
                          href={l.path}
                          className={classNames(
                            pathname === l.path
                              ? 'text-[#F58A07]'
                              : 'text-white',
                            'font-semibold font-inter text-base lg:text-lg py-2 mx-8 lg:mx-7 flex group-hover:text-[#F58A07] transition duration-300 ease-in-out'
                          )}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="px-5 lg:px-7">
                    <a
                      href="https://linktr.ee/caksa_team"
                      target="_blank"
                      rel="noreferrer"
                      className="flex font-inter justify-center items-center w-full text-white bg-[#F58A07] font-medium rounded-md text-sm px-5 py-2.5 text-center "
                    >
                      <p>Let&apos;s Talk!</p>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;