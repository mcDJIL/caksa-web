import React from 'react';
import './globals.css';

import MainLayout from '../components/layout/MainLayout';
import Script from 'next/script';

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
    google: 'UTifrtc-TwL0ZOg02VdKEfqQSVnCfMk7aNgqsG34cIA', // Get from Google Search Console
  },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CAKSA PENS",
    "alternateName": "Cakrawala Skala PENS",
    "url": "https://caksa.id",
    "logo": "https://caksa.id/assets/img/logo/logo-navbar.png",
    "description": "International Aeronautics Research Team (UAV) at Politeknik Elektronika Negeri Surabaya",
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
      "addressRegion": "East Java",
      "addressCountry": "ID"
    }
  };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="UTifrtc-TwL0ZOg02VdKEfqQSVnCfMk7aNgqsG34cIA" />  
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" href="./icon0.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="./apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
