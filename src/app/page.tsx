import React from 'react';
import Homepage from '../pages/Home/Home';

export const metadata = {
  title: 'CAKSA PENS — Tim Riset Aeronatics (UAV) PENS',
  description:
    'Tim Riset Aeronatics CAKSA PENS: penelitian UAV, publikasi, dan kolaborasi industri-akademia. Pelajari proyek kami & bergabung dalam inisiatif R&D.',
  keywords: ['CAKSA', 'CAKSA PENS', 'PENS', 'Aeronatics', 'UAV', 'riset'],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: 'Tim Riset Aeronatics CAKSA PENS',
  url: 'https://caksa-pens.vercel.app/',
  logo: 'https://caksa-pens.vercel.app/assets/img/logo.png',
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
