import React from 'react';

interface CoverPhotoProps {
  imageSrc: string;
  altText: string;
}

const CoverPhoto: React.FC<CoverPhotoProps> = ({ imageSrc, altText }) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="w-[80%] md:w-[50%] lg:w-[50%] overflow-hidden rounded-lg border-2 border-[#D4AF37] shadow-md">
        <img 
          src={imageSrc} 
          alt={altText} 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
};

export default CoverPhoto;
