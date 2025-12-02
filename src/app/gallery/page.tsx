import type { Metadata } from 'next';
import GalleryPage from '../../pages/Gallery/Gallery';

export const metadata: Metadata = {
  title: 'Galeri CAKSA PENS — Dokumentasi Proyek & Prototipe UAV',
  description:
    'Galeri CAKSA PENS: dokumentasi proyek, prototipe UAV, dan momen penelitian. Telusuri foto dan video yang menampilkan inovasi tim riset aeronotika kami.',
  keywords: [
    'Galeri CAKSA',
    'Foto UAV CAKSA',
    'Prototipe Pesawat Tanpa Awak',
    'Riset Aeronautika PENS',
    'Tim CAKSA PENS',
  ],
  openGraph: {
    title: 'Galeri CAKSA PENS — Dokumentasi Proyek & Prototipe UAV',
    description:
      'Telusuri dokumentasi proyek, prototipe UAV, dan momen riset tim CAKSA PENS.',
    url: 'https://caksa-pens.vercel.app/gallery',
    siteName: 'CAKSA PENS',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeri CAKSA PENS — Dokumentasi Proyek & Prototipe UAV',
    description:
      'Dokumentasi proyek dan prototipe UAV tim riset aeronautika CAKSA PENS.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Gallery = () => <GalleryPage />;

export default Gallery;
