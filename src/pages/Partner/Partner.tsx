"use client";

import { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import gallery from '../../../public/assets/img/model/gacor.png';
import Partner from '../../../public/assets/img/partner/Partner.png';
import Gold from '../../../assets/img/Partner_Gold.png';
import logoPutih from '../../../public/assets/img/logo/logo-white.png';
import LogoPartner1 from '../../../assets/img/Logo1.png';
import LogoPartner2 from '../../../assets/img/Logo2.png';
import LogoPartner3 from '../../../assets/img/Logo3.png';
import Silver1 from '../../../assets/img/Silver1.png';
import Silver2 from '../../../assets/img/Silver2.png';
import Silver3 from '../../../assets/img/Silver3.png';
import Bronze1 from '../../../assets/img/Bronze1.png';
import Bronze2 from '../../../assets/img/Bronze2.png';
import Bronze3 from '../../../assets/img/Bronze3.png';
import Djarum from '../../../public/assets/img/partner/djarum_platinum.jpg';
import Akhishop from '../../../public/assets/img/partner/akhishop.png';
import Buaya from '../../../public/assets/img/partner/buaya.png';
import Spectrum from '../../../public/assets/img/partner/spectrum.png';
import Istana from '../../../public/assets/img/partner/istana.png';
import Theater from '../../../public/assets/img/partner/theater.png';
import Isen from '../../../public/assets/img/partner/isen.png';
import Achivement from '../../../assets/img/achivement.png';
import ReactCurvedText from 'react-curved-text';
import { classNames } from '../../lib/classNames';
import BecomePartner from '@/src/components/sections/Partner/BecomePartner';
import Support from '@/src/components/sections/Partner/Support';
import PlatinumSupport from '@/src/components/sections/Partner/PlatinumSupport';
import GoldSupport from '@/src/components/sections/Partner/GoldSupport';
import SilverSupport from '@/src/components/sections/Partner/SilverSupport';
import BronzeSupport from '@/src/components/sections/Partner/BronzeSupport';
import Hero from '@/src/components/sections/Home/Hero';

const PartnerPage = () => {
  const [onHover, setOnHover] = useState(false);
  const [onActive, setOnActive] = useState('');

  return (
    <>
        <Hero
        img="/assets/img/banner/banner-partner.png"
        alt="hero banner"
        heading={
          <h1 className="text-4xl italic font-bold text-center text-white top-20 lg:text-7xl">
            Partner <br className="md:hidden" />
            Behind Us
          </h1>
        }
        paragraph={
          <>
            <div className="border-[1px] border-white mx-auto h-20 md:h-32"></div>
            <p className="text-white text-base lg:text-[22px] w-[815px] text-center">
              Collaborative Forces: Nurturing <br className="md:hidden" /> in
              Success with Our Esteemed Partners
            </p>
          </>
        }
        isHome={false}
      />

        <BecomePartner />
        <Support />
        <PlatinumSupport />
        <GoldSupport />
        <SilverSupport />
        <BronzeSupport />
    </>
  );
};

export default PartnerPage;
