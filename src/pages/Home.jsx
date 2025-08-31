import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import Banner from '../components/Banner';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      {/* Hero Section - CarTrade */}
      <Hero
        title="Find Your Dream Car with CarTrade"
        subtitle="Buy, sell, and trade cars with ease. Verified listings from trusted sellers and dealers."
        buttonText="Browse Cars"
      />

      {/* Featured Cars Section */}
      <FeaturedSection
        title="Featured Cars for Sale"
        subtitle="Explore top trending cars available on CarTrade."
      />

      {/* Testimonials Section */}
      <Testimonial
        title="What Our Customers Say"
        subtitle="Thousands of happy users have bought and sold their cars with CarTrade."
      />

      {/* Banner Section */}
      <Banner
        title="Want to Sell Your Car?"
        subtitle="List your car on CarTrade and connect with serious buyers instantly."
        buttonText="Sell Your Car"
      />

      {/* Newsletter Section */}
      <Newsletter
        title="Stay Updated with CarTrade"
        subtitle="Subscribe to get the latest car deals, offers, and market updates."
      />
    </>
  );
};

export default Home;
