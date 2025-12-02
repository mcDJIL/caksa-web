import Image from 'next/image';
import news from '../../../../public/assets/img/news/news-1.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import ReactCurvedText from 'react-curved-text';
import { faArrowRight, faCaretRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const News = () => {

    return (
        <div className="relative w-full px-4 py-16 md:py-20 lg:px-10 xl:px-20 2xl:px-[117px]">
            <div className="w-full">
                <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-20 w-screen relative left-1/2 -translate-x-1/2">
                    <div className="flex-1 h-2 bg-[#F58A07]" />
                    <div className="text-center mb-0 shrink-0">
                        <h2 className="font-bold leading-tight text-2xl md:text-3xl lg:text-[40px]">Explore Our <span className="text-[#F58A07]">News</span></h2>
                    </div>
                    <div className="flex-1 h-2 bg-[#F58A07]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 md:mt-16 lg:mt-20">
                    <div className="flex flex-col relative sm:w-[553px] lg:w-full xl:w-[553px]">
                        <div className="relative w-full">
                            <div className="hidden sm:block absolute -top-4 -left-4 md:-top-5 md:-left-5 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 border-t-20 border-l-20 lg:border-t-28 lg:border-l-28 border-[#084887] z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                            <Image src={news} className='' alt="News" />
                        </div>

                        <div className="mt-4 md:mt-5">
                            <p className='text-[#084887] font-bold text-sm md:text-base border-l-4 border-l-[#084887] pl-3'>
                                SAFMC <span className='font-medium ms-3 md:ms-6 text-black text-sm md:text-base'>Competition</span>
                            </p>
                            <p className='text-[#084887] font-bold text-lg md:text-xl lg:text-2xl mt-2'>CAKSA PENS Enters International Stage at SAFMC 2024 Competition</p>

                            <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-5 mb-6 md:mb-8 lg:mb-10">
                                <div className="flex items-center gap-1 md:gap-2">
                                    <FontAwesomeIcon className='text-[#084887] text-lg md:text-xl' icon={faUserCircle} />
                                    <p className='text-gray-500 text-xs md:text-sm'> By Areal</p>
                                </div>
                                <div className="flex items-center gap-1 md:gap-2">
                                    <FontAwesomeIcon className='text-[#084887] text-lg md:text-xl' icon={faCalendar} />
                                    <p className='text-gray-500 text-xs md:text-sm'> 10 October 2025</p>
                                </div>
                            </div>

                            <button className='cursor-pointer text-white bg-[#F58A07] hover:bg-[#d97a06] transition-all duration-300 ease-in-out px-6 py-2 md:px-8 md:py-3 rounded-bl-4xl rounded-r-4xl font-semibold text-sm md:text-base'>READ MORE</button>
                        </div>

                        <div className="hidden sm:block absolute bottom-0 right-0 bg-linear-to-b from-[#0848871A] to-[#08488766] rounded-full flex justify-center">
                            <div className="relative flex items-center justify-center">
                                <img
                                    src="/assets/img/logo/logo-black.png"
                                    alt="logocaksa"
                                    loading="lazy"
                                    className="sm:w-[20%] absolute"
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
                                        textProps={{
                                            style: { fontSize: 11.3, letterSpacing: 3 },
                                        }}
                                        textPathProps={{ fill: '#000' }}
                                        tspanProps={{}}
                                        ellipseProps={{}}
                                        svgProps={{}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 md:gap-6 lg:gap-7 relative mt-8 lg:mt-0">
                        <div className="flex gap-3 md:gap-4 lg:gap-5">
                            <div className="relative shrink-0">
                                <div className="hidden lg:block absolute -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 border-t-20 border-l-20 border-[#084887] z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                                <Image src={news} className='w-24 md:w-32 lg:w-[270px]' alt="News" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <p className='text-[#084887] font-bold text-xs md:text-sm lg:text-base border-l-4 border-l-[#084887] pl-2 md:pl-3'>
                                    SAFMC <span className='font-medium ms-1 md:ms-2 lg:ms-4 text-black text-xs md:text-sm lg:text-base'>Competition</span>
                                </p>
                                <p className='text-[#084887] font-bold text-sm md:text-base lg:text-xl mt-1 md:mt-2 line-clamp-2 lg:line-clamp-none'>CAKSA PENS Enters International Stage at SAFMC 2024 Competition</p>

                                <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-5">
                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faUserCircle} />
                                        <p className='text-gray-500 text-xs md:text-sm'> By Areal</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faCalendar} />
                                        <p className='text-gray-500 text-xs md:text-sm'> 10 October 2025</p>
                                    </div>
                                </div>

                                <p className='text-gray-500 font-semibold cursor-pointer text-xs sm:text-base mt-2 sm:mt-6'>READ MORE <FontAwesomeIcon icon={faChevronRight} /></p>
                            </div>
                        </div>
                        <div className="flex gap-3 md:gap-4 lg:gap-5">
                            <div className="relative shrink-0">
                                <div className="hidden lg:block absolute -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 border-t-20 border-l-20 border-[#084887] z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                                <Image src={news} className='w-24 md:w-32 lg:w-[270px]' alt="News" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <p className='text-[#084887] font-bold text-xs md:text-sm lg:text-base border-l-4 border-l-[#084887] pl-2 md:pl-3'>
                                    SAFMC <span className='font-medium ms-1 md:ms-2 lg:ms-4 text-black text-xs md:text-sm lg:text-base'>Competition</span>
                                </p>
                                <p className='text-[#084887] font-bold text-sm md:text-base lg:text-xl mt-1 md:mt-2 line-clamp-2 lg:line-clamp-none'>CAKSA PENS Enters International Stage at SAFMC 2024 Competition</p>

                                <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-5">
                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faUserCircle} />
                                        <p className='text-gray-500 text-xs md:text-sm'> By Areal</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faCalendar} />
                                        <p className='text-gray-500 text-xs md:text-sm'> 10 October 2025</p>
                                    </div>
                                </div>

                                <p className='text-gray-500 font-semibold cursor-pointer text-xs sm:text-base mt-2 sm:mt-6'>READ MORE <FontAwesomeIcon icon={faChevronRight} /></p>
                            </div>
                        </div>
                        <div className="flex gap-3 md:gap-4 lg:gap-5">
                            <div className="relative shrink-0">
                                <div className="hidden lg:block absolute -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 border-t-20 border-l-20 border-[#084887] z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                                <Image src={news} className='w-24 md:w-32 lg:w-[270px]' alt="News" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <p className='text-[#084887] font-bold text-xs md:text-sm lg:text-base border-l-4 border-l-[#084887] pl-2 md:pl-3'>
                                    SAFMC <span className='font-medium ms-1 md:ms-2 lg:ms-4 text-black text-xs md:text-sm lg:text-base'>Competition</span>
                                </p>
                                <p className='text-[#084887] font-bold text-sm md:text-base lg:text-xl mt-1 md:mt-2 line-clamp-2 lg:line-clamp-none'>CAKSA PENS Enters International Stage at SAFMC 2024 Competition</p>

                                <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-5">
                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faUserCircle} />
                                        <p className='text-gray-500 text-xs md:text-sm'> By Areal</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faCalendar} />
                                        <p className='text-gray-500 text-xs md:text-sm'> 10 October 2025</p>
                                    </div>
                                </div>

                                <p className='text-gray-500 font-semibold cursor-pointer text-xs sm:text-base mt-2 sm:mt-6'>READ MORE <FontAwesomeIcon icon={faChevronRight} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;