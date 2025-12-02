import React from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem = ({ src, alt } : GalleryItemProps) => (
  <div className="relative w-full h-full group">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full pointer-events-none"
    />
    <div className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
      <img
        src="/assets/img/gallery/bg-hover.png"
        alt="bg-content"
        loading="lazy"
        className="absolute top-0 left-0 w-full"
      />
      <div className="absolute bottom-0 left-0 pb-3 pl-3">
        <h1 className="text-lg font-medium text-white">{alt}</h1>
      </div>
    </div>
  </div>
);

export default GalleryItem;
