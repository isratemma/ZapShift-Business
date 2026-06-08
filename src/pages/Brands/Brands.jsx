import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import casio from '../../assets/brands/casio.png';
import amazon from '../../assets/brands/amazon.png';
import moonstar from '../../assets/brands/moonstar.png';
import star from '../../assets/brands/star.png';
import startPeople from '../../assets/brands/start_people.png';
import randstad from '../../assets/brands/randstad.png';

const brands = [casio, amazon, moonstar, star, startPeople, randstad];

const Brands = () => {
  return (
    <section className="py-10 px-6 md:px-16 bg-white border-y border-gray-100">
      <p className="text-center text-gray-500 text-sm mb-6">
        We've helped thousands of sales teams
      </p>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        loop={true}
        slidesPerView={2}
        spaceBetween={40}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        allowTouchMove={false}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={brand}
              alt={`brand-${index}`}
              className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;
