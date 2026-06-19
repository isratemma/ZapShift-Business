import React from 'react';
import merchantBg from '../../assets/be-a-merchant-bg.png';
import locationImg from '../../assets/location-merchant.png';

const MerchantCTA = () => {
  return (
    <section
      className="relative mx-6 md:mx-16 my-10 rounded-3xl overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #03373D 0%, #0a5c63 100%)',
      }}
    >
      {/* Background texture */}
      <img
        src={merchantBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        loading="lazy"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
        {/* Text */}
        <div className="max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Merchant and Customer Satisfaction
            <br />
            is Our First Priority
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            We offer the lowest delivery charge with the highest value along with 100% safety of
            your product. Pathao courier delivers your parcels in every corner of Bangladesh right
            on time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#CAEB66] hover:bg-[#b5dc2a] text-black font-semibold px-6 py-2.5 rounded-full transition-all duration-200">
              Become a Merchant
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-2.5 rounded-full transition-all duration-200">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Image */}
        <img
          src={locationImg}
          alt="merchant"
          className="w-56 md:w-72 object-contain flex-shrink-0"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default MerchantCTA;
