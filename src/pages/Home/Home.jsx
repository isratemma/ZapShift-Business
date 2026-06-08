import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Features from '../Features/Features';
import MerchantCTA from '../MerchantCTA/MerchantCTA';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import FAQ from '../FAQ/FAQ';

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <HowItWorks />
      <OurServices />
      <Features />
      <MerchantCTA />
      <CustomerReviews />
      <FAQ />
    </div>
  );
};

export default Home;
