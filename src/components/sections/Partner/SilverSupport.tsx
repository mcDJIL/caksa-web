import React from 'react';

const Akhishop = '/assets/img/partner/akhishop.png';
const Isen = '/assets/img/partner/isen.png';
const Istana = '/assets/img/partner/istana.png';
const Theater = '/assets/img/partner/theater.png';
const Spectrum = '/assets/img/partner/spectrum.png';
const Buaya = '/assets/img/partner/buaya.png';

const SilverSupport = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl italic font-bold text-center font-poppins">
        <span className="text-[#084887]">Silver</span>{' '}Support
      </h1>
      <div className="grid grid-cols-1 gap-10 px-5 mt-16 place-items-center">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          <img
            src={Akhishop}
            alt="support"
            className="w-auto h-auto bg-cover md:w-44"
            loading="lazy"
          />
          <img
            src={Isen}
            alt="support"
            className="w-auto h-auto bg-cover md:w-44"
            loading="lazy"
          />
          <img
            src={Istana}
            alt="support"
            className="w-auto h-auto bg-cover md:w-44"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <img
            src={Theater}
            alt="support"
            className="w-auto h-auto bg-cover md:w-44"
            loading="lazy"
          />
          <img
            src={Spectrum}
            alt="support"
            className="w-auto h-auto bg-cover md:w-44"
            loading="lazy"
          />
          <img
            src={Buaya}
            alt="support"
            className="w-auto h-auto bg-cover md:w-44"
            loading="lazy"
          />
          <img
            src={Buaya}
            alt="support"
            className="w-auto h-auto bg-cover md:w-44"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SilverSupport;
