import React from 'react';
import serviceIcon from '../../assets/service.png';

const services = [
  {
    title: 'Express & Standard Delivery',
    description:
      'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
    highlight: false,
  },
  {
    title: 'Nationwide Delivery',
    description:
      'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
    highlight: true,
  },
  {
    title: 'Fulfillment Solution',
    description:
      'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    highlight: false,
  },
  {
    title: 'Cash on Home Delivery',
    description:
      '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    highlight: false,
  },
  {
    title: 'Corporate Service / Contract In Logistics',
    description:
      'Customized corporate services which includes warehouse and inventory management support.',
    highlight: false,
  },
  {
    title: 'Parcel Return',
    description:
      'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
    highlight: false,
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#1a2e44]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Our Services</h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
          packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-200 hover:scale-105 ${
              service.highlight
                ? 'bg-[#c8f03d] text-black'
                : 'bg-[#fde8df] text-gray-800'
            }`}
          >
            <img src={serviceIcon} alt={service.title} className="w-14 h-14 object-contain" />
            <h3
              className={`font-bold text-base ${
                service.highlight ? 'text-[#1a2e44]' : 'text-gray-900'
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                service.highlight ? 'text-[#1a2e44]' : 'text-gray-600'
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
