import React from 'react';
import liveTracking from '../../assets/live-tracking.png';
import safeDelivery from '../../assets/safe-delivery.png';
import deliveryMan from '../../assets/tiny-deliveryman.png';

const features = [
  {
    img: liveTracking,
    title: 'Live Parcel Tracking',
    description:
      'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment\'s journey and get instant status updates for complete peace of mind.',
  },
  {
    img: safeDelivery,
    title: '100% Safe Delivery',
    description:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
  },
  {
    img: deliveryMan,
    title: '24/7 Call Center Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.',
  },
];

const Features = () => {
  return (
    <section className="py-14 px-6 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-24 h-24 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
