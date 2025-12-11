"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface UavItem {
    name: string;
    img: string;
}

const uavs: UavItem[] = [
    { name: "Gacor X1", img: "/assets/img/model/gacor-x1.png" },
    { name: "Galakasa", img: "/assets/img/model/galakasa.png" },
    { name: "Anak Lanang", img: "/assets/img/model/anak-lanang.png" },
    { name: "Umar", img: "/assets/img/model/umar.png" },
    { name: "Gacor X1", img: "/assets/img/model/gacor-x1.png" },
];

const UavCard = ({ item }: { item: UavItem }) => {
    return (
        <div className="relative flex flex-col items-center pb-10 md:pb-12">
            <div
                className={
                    "relative flex items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-[#F58A07]/40 overflow-visible w-[200px] h-[200px] transition-all duration-300 ease-out group-[.swiper-slide-active]/slide:w-[230px] group-[.swiper-slide-active]/slide:h-[230px] sm:group-[.swiper-slide-active]/slide:w-[300px] sm:group-[.swiper-slide-active]/slide:h-[300px]"
                }
            >
                <img
                    src={item.img}
                    alt={item.name}
                    className={
                        "transition-all duration-300 ease-out w-[200px] h-auto group-[.swiper-slide-active]/slide:w-[230px] sm:group-[.swiper-slide-active]/slide:w-[300px] group-[.swiper-slide-active]/slide:-translate-y-2"
                    }
                    loading="lazy"
                />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[180px] group-[.swiper-slide-active]/slide:w-[150px] sm:group-[.swiper-slide-active]/slide:w-[200px] bg-[#F58A07] px-3 py-2 text-center shadow-md transition-all duration-300 ease-out">
                <p className="font-semibold text-base md:text-lg text-white truncate">{item.name}</p>
            </div>
        </div>
    );
};

const OurUav = () => {
    return (
        <div className="relative w-full px-4 py-16 md:py-20 lg:px-10 xl:px-20 2xl:px-[117px]">
            <div className="w-full">
                <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-20 w-screen relative left-1/2 -translate-x-1/2">
                    <div className="flex-1 h-2 bg-[#F58A07]" />
                    <div className="text-center mb-6 md:mb-8 lg:mb-10 shrink-0">
                        <h2 className="font-bold leading-tight text-2xl md:text-3xl lg:text-[40px]">Let's Explore</h2>
                        <h2 className="font-bold leading-tight text-2xl md:text-3xl lg:text-[40px]">
                            Our <span className="text-[#F58A07]">CAKSA's UAV</span>
                        </h2>
                    </div>
                    <div className="flex-1 h-2 bg-[#F58A07]" />
                </div>

                <div className="relative">
                    {/* Navigation buttons */}
                    <button
                        className="uav-prev cursor-pointer absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-[#F58A07] hover:bg-[#d97405] text-white rounded-full p-2 md:p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-[#F58A07]/50"
                        aria-label="Previous"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button
                        className="uav-next cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-[#F58A07] hover:bg-[#d97405] text-white rounded-full p-2 md:p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-[#F58A07]/50"
                        aria-label="Next"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        // autoplay={{ delay: 4500, disableOnInteraction: false }}
                        navigation={{ prevEl: ".uav-prev", nextEl: ".uav-next" }}
                        loop
                        centeredSlides
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 20 }
                        }}
                        className="select-none"
                        id="uavs"
                    >
                        {uavs.map((uav, index) => (
                            <SwiperSlide key={`${uav.name}-${index}`} className="group/slide cursor-grab active:cursor-grabbing py-8">
                                <UavCard item={uav} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurUav;