import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import reviewQuote from '../../assets/reviewQuote.png';
import customerTop from '../../assets/customer-top.png';

const reviews = [
  {
    name: 'Awlad Hossin',
    role: 'Senior Product Designer',
    review:
      'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    avatar: null,
  },
  {
    name: 'Rasel Ahmed',
    role: 'Business Owner',
    review:
      'ZapShift has completely transformed how I handle deliveries. Fast, reliable, and their customer support is always available whenever I need help.',
    avatar: null,
  },
  {
    name: 'Rasel Uddin',
    role: 'E-commerce Seller',
    review:
      'The nationwide delivery coverage is outstanding. My customers in every district receive their parcels within 48-72 hours as promised.',
    avatar: null,
  },
  {
    name: 'Sarah Khan',
    role: 'Entrepreneur',
    review:
      'Cash on delivery feature is a game changer for my business. 100% safe and the tracking system gives both me and my customers full peace of mind.',
    avatar: null,
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <img src={customerTop} alt="" className="w-24 mx-auto mb-4 object-contain" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          What our customers are sayings
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper
          alignment, reduce pain, and strengthen your body with ease.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.review-prev',
            nextEl: '.review-next',
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          className="pb-14"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mx-4">
                <img src={reviewQuote} alt="quote" className="w-8 mb-4 opacity-60" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{review.review}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav buttons */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <button className="review-prev w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            ←
          </button>
          <button className="review-next w-9 h-9 rounded-full bg-[#CAEB66] flex items-center justify-center hover:bg-[#b5dc2a] transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
