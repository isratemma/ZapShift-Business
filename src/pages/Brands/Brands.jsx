import React from 'react';
import casio from '../../assets/brands/casio.png';
import amazon from '../../assets/brands/amazon.png';
import moonstar from '../../assets/brands/moonstar.png';
import star from '../../assets/brands/star.png';
import startPeople from '../../assets/brands/start_people.png';
import randstad from '../../assets/brands/randstad.png';

const brands = [
  { img: casio, name: 'Casio' },
  { img: amazon, name: 'Amazon' },
  { img: moonstar, name: 'Moonstar' },
  { img: star, name: 'Star' },
  { img: startPeople, name: 'Start People' },
  { img: randstad, name: 'Randstad' },
];

// duplicate for seamless loop
const allBrands = [...brands, ...brands];

const Brands = () => {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-gray-500 text-sm mb-6">
        We've helped thousands of sales teams
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {allBrands.map((brand, index) => (
            <img
              key={index}
              src={brand.img}
              alt={brand.name}
              className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 inline-block flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
