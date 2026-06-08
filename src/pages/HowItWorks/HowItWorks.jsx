import React from 'react';
import bookingIcon from '../../assets/bookingIcon.png';

const services = [
  {
    icon: bookingIcon,
    title: 'Booking Pick & Drop',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    icon: bookingIcon,
    title: 'Cash On Delivery',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    icon: bookingIcon,
    title: 'Delivery Hub',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    icon: bookingIcon,
    title: 'Booking SME & Corporate',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-14 px-6 md:px-16 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-[#fdf5f0] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
          >
            <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
            <h3 className="font-semibold text-gray-900 text-base">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
