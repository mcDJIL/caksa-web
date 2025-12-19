import React from 'react';
import Homepage from '../pages/Home/Home';

export const metadata = {
  title: 'CAKSA PENS — Tim Riset Aeronatics (UAV) Politeknik Elektronika Negeri Surabaya',
  description:
    'Situs resmi CAKSA PENS, tim riset kedirgantaraan peraih juara SAFMC 2025. Temukan informasi tentang penelitian, proyek, dan publikasi kami di bidang UAV dan aeronotika.',
  keywords: ['CAKSA', 'CAKSA PENS', 'PENS', 'Aeronatics', 'UAV', 'riset'],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: 'Tim Riset Aeronatics CAKSA PENS',
  url: 'https://caksa.id/',
  logo: 'https://caksa.id/assets/img/logo.png',
  sameAs: [
    'https://www.instagram.com/caksaeepis/',
    'https://www.linkedin.com/company/caksa-eepis/',
  ],
  member: [
    /* Tambahkan anggota nyata di sini */
    {
      "@type": "Person",
      name: 'Moch Djauharil Ilmi',
      jobTitle: 'Branding Division',
    },
  ],
};

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD disisipkan dari server untuk SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Homepage />
    </>
  );
};

export default Home;
