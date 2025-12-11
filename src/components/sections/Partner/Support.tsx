import React from 'react';

const Clev = '/assets/img/partner/clev-innovation-labs.png';
const Akhishop = '/assets/img/partner/akhishop.png';
const Isen = '/assets/img/partner/isen.png';
const Istana = '/assets/img/partner/istana.png';
const Theater = '/assets/img/partner/theater.png';
const Spectrum = '/assets/img/partner/spectrum.png';
const Buaya = '/assets/img/partner/buaya.png';

const Support = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl italic font-bold text-center font-poppins">
        All <span className="text-[#084887]">Support</span>{' '}
      </h1>
      <div className="grid grid-cols-1 gap-10 px-5 mt-16 place-items-center">
        <div className="grid grid-cols-1 gap-10">
          <img src={Clev} alt="support" className="bg-cover" loading="lazy" />
        </div>

        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <img
            src={Akhishop}
            alt="support"
            className="w-auto h-auto bg-cover md:h-58 md:w-60"
            loading="lazy"
          />
          <img
            src={Isen}
            alt="support"
            className="w-auto h-auto bg-cover md:h-48 md:w-60"
            loading="lazy"
          />
          <img
            src={Istana}
            alt="support"
            className="w-auto h-auto bg-cover md:w-64 md:h-44"
            loading="lazy"
          />
          <img
            src={Theater}
            alt="support"
            className="w-auto h-auto bg-cover md:h-44 px-7"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <img
            src={Spectrum}
            alt="support"
            className="w-auto h-auto bg-cover md:h-32 md:w-52"
            loading="lazy"
          />
          <img
            src={Buaya}
            alt="support"
            className="w-auto h-auto bg-cover md:h-36 md:w-60"
            loading="lazy"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Support;
