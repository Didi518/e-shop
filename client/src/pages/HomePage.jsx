import React from 'react';
import BestDeals from '../components/Route/BestDeals/BestDeals';
import Categories from '../components/Route/Categories/Categories';
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default HomePage;
