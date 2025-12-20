import React from 'react';
import Homepage from '../pages/Home/Home';

export const metadata = {
  title: 'CAKSA PENS - International Flying Robot & UAV Team PENS',
  description: 'CAKSA (Cakrawala Skala) is an international flying robot team from Politeknik Elektronika Negeri Surabaya (PENS) focusing on UAV research and development since 2022. Winners at TEKNOFEST and SAFMC competitions.',
  keywords: 'tim robot pens, tim robot terbang pens, tim internasional pens, tim uav pens, caksa pens, teknofest pens, uav pens, drone pens, politeknik elektronika surabaya, pens robot team, pens international team',
  authors: [{ name: 'CAKSA Team' }],
  openGraph: {
    title: 'CAKSA PENS - International Flying Robot & UAV Team',
    description: 'International UAV research team from PENS competing at TEKNOFEST Turkey and SAFMC Singapore',
    url: 'https://caksa.id',
    siteName: 'CAKSA PENS',
    images: [
      {
        url: 'https://caksa.id/assets/img/banner/banner-home.png',
        width: 1200,
        height: 630,
        alt: 'CAKSA Team PENS',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAKSA PENS - International Flying Robot Team',
    description: 'International UAV research team from PENS',
    images: ['https://caksa.id/assets/img/banner/banner-home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Get from Google Search Console
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CAKSA PENS",
    "alternateName": "Cakrawala Skala PENS",
    "url": "https://caksa.id",
    "logo": "https://caksa.id/assets/img/logo/favicon.png",
    "description": "Tim Riset Aeronautics (UAV) Politeknik Elektronika Negeri Surabaya",
    "email": "caksaeepis@gmail.com",
    "foundingDate": "2022",
    "sameAs": [
      "https://www.instagram.com/caksaeepis/",
      "https://www.linkedin.com/company/caksa-eepis/",
      "https://www.tiktok.com/@caksaeepis",
      "https://www.youtube.com/@caksaeepis"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surabaya",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID"
    },
    "award": [
      "1st Runner-Up SAFMC 2025",
      "Top 10 SAFMC 2024",
      "Finalist TEKNOFEST 2024",
      "Finalist TEKNOFEST 2023"
    ],
  "member": [
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
