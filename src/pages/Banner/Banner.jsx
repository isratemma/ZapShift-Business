import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../assets/banner/banner1.png';
import bannerImg2 from '../../assets/banner/banner2.png';
import bannerImg3 from '../../assets/banner/banner3.png';

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        <div>
          <img src={bannerImg1} className="w-full object-cover" alt="Banner 1" loading="eager" />
        </div>
        <div>
          <img src={bannerImg2} className="w-full object-cover" alt="Banner 2" loading="lazy" />
        </div>
        <div>
          <img src={bannerImg3} className="w-full object-cover" alt="Banner 3" loading="lazy" />
        </div>
      </Carousel>

      {/* Overlay buttons */}
      <div className="absolute bottom-10 left-8 flex items-center gap-4 z-10">
        <button className="flex items-center gap-2 bg-[#c8f03d] hover:bg-[#b5dc2a] text-black font-semibold px-5 py-2.5 rounded-full transition-all duration-200">
          Track Your Parcel
          <span className="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">
            ➜
          </span>
        </button>
        <button className="text-white font-semibold px-5 py-2.5 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-200">
          Be A Rider
        </button>
      </div>
    </div>
  );
};

export default Banner;
