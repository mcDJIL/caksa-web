import React from 'react';

const Video = () => {
  return (
    <div className="flex justify-center px-4 pb-10 lg:px-10 xl:px-20 2xl:px-[117px] font-poppins">
      <div className="flex flex-col items-end justify-center object-center relative w-full py-[50px]">
        <div className="relative flex items-center justify-center w-full h-full py-10 pr-5 border-r-8 border-orange-400 border-y-8 rounded-r-xl">
          <video
            src="/assets/video/fix.mp4"
            autoPlay
            loop
            muted
            className="block w-[100%] h-[500px] object-cover rounded-xl"
          ></video>
          <div className="absolute top-0 left-0 w-full h-full py-10 pr-5">
            <div className="bg-[#084887] rounded-xl opacity-60 w-[100%] h-full"></div>
          </div>
          <div className="absolute left-0 flex items-end h-full pb-10">
            <img
              src="/assets/img/video/assets-video.png"
              alt="bg-image"
              className="w-3/4 pointer-events-none md:w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute flex flex-col items-end gap-3 mr-12">
          <h1 className="font-semibold text-white lg:text-2xl">
            Caksa&apos;s Video Mission
          </h1>
          <div className="">
            <a
              href="https://www.youtube.com/watch?v=sRoj_Ojju5A"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-1 text-white border-2 border-white rounded-sm lg:text-lg"
            >
              Watch Now{' '}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5909 4.79965C13.2576 5.7619 13.2576 8.16753 11.5909 9.12978L4.73677 13.087C3.0701 14.0493 0.986767 12.8465 0.986767 10.922V3.00745C0.986767 1.08295 3.0701 -0.11986 4.73677 0.84239L11.5909 4.79965Z"
                  stroke="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute top-10 left-0 bg-white text-xl lg:text-4xl font-bold font-poppins text-[#084887] pr-5 lg:pr-10">
          CAKSA at TEKNOFEST 2023
        </div>
      </div>
    </div>
  );
};

export default Video;
