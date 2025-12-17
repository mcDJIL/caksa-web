import React from 'react';
import './globals.css';

import MainLayout from '../components/layout/MainLayout';

export const metadata = {
  title: {
    default: 'CAKSA PENS — Tim Riset Aeronatics',
    template: '%s | CAKSA PENS',
  },
  description:
    'Profil Tim Riset Aeronatics CAKSA PENS — penelitian, proyek, publikasi, dan kolaborasi di bidang aeronotika.',
  keywords: [
    'CAKSA',
    'PENS',
    'Aeronatics',
    'tim riset',
    'UAV',
    'aeronotika',
  ],
  authors: [{ name: 'Tim CAKSA PENS', url: 'https://caksa-pens.vercel.app' }],
  openGraph: {
    title: 'CAKSA PENS — Tim Riset Aeronatics',
    description:
      'Tim Riset Aeronatics CAKSA PENS — profil, proyek, dan publikasi.',
    siteName: 'CAKSA PENS',
    url: 'https://caksa-pens.example/',
    images: [
      {
        url: '/assets/img/logo.png',
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
    images: ['/assets/img/logo.png'],
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
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
