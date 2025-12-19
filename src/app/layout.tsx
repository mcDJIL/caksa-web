import React from 'react';
import './globals.css';

import MainLayout from '../components/layout/MainLayout';

export const metadata = {
  title: {
    default: 'CAKSA PENS — Tim Riset Aeronatics',
    template: '%s | CAKSA PENS',
  },
  description:
    'Profil Tim Riset Aeronatics CAKSA PENS — penelitian, proyek, publikasi, dan kolaborasi di bidang aeronotika dan robotika.',
  keywords: [
    'CAKSA',
    'PENS',
    'Aeronatics',
    'tim riset',
    'UAV',
    'aeronotika',
    'Tim Robot PENS', 
    'Tim UAV PENS', 
    'Tim Robot Terbang PENS', 
    'Tim Riset PENS', 
    'Tim Robotika PENS'
  ],
  authors: [{ name: 'Tim CAKSA PENS', url: 'https://caksa.id' }],
  openGraph: {
    title: 'CAKSA PENS — Tim Riset Aeronatics',
    description:
      'Tim Riset Aeronatics CAKSA PENS — profil, proyek, dan publikasi.',
    siteName: 'CAKSA PENS',
    url: 'https://caksa.id/',
    images: [
      {
        url: '/assets/favicon.ico',
        alt: 'CAKSA PENS logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAKSA PENS — Tim Riset Aeronatics',
    description:
      'Profil Tim Riset Aeronatics CAKSA PENS — penelitian, publikasi, dan kolaborasi.',
    images: ['/assets/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="UTifrtc-TwL0ZOg02VdKEfqQSVnCfMk7aNgqsG34cIA" />  
        <link rel="icon" href="/favicon.ico" sizes="48x48"></link>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CAKSA PENS",
              "alternateName": "Tim Robot PENS - Cakrawala Skala",
              "url": "https://caksa.id",
              "parentOrganization": {
                "@type": "CollegeOrUniversity",
                "name": "Politeknik Elektronika Negeri Surabaya"
              },
              "award": "2nd Place SAFMC 2025"
            })
          }}
        />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
