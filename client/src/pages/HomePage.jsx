import React from 'react';
import BestDeals from '../components/Route/BestDeals/BestDeals';
import Categories from '../components/Route/Categories/Categories';
import Events from '../components/Route/Events/Events';
import FeaturedProduct from '../components/Route/FeaturedProduct/FeaturedProduct';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';
import Sponsored from '../components/Route/Sponsored/Sponsored';

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
