import React from 'react';
import Hero from '../components/Hero';
import LatesMobiles from '../components/LatesMobiles';
import MobileScroll from '../components/MobileScroll';
import DiscoverPage from '../components/DiscoverPage';

const Home = () => {
  return (
    <div className='home'>
      <h1 style={{ textAlign: "center" }}>Mobile Companies</h1>
      
      <Hero />
      <h1 className="title">
        Mobile Companies
      </h1>
      <MobileScroll />
      
      <div className="title latest">
        <h1>--Latest Mobiles--</h1>
      </div>
      <LatesMobiles />   
      <DiscoverPage />
    </div>
  )
}

export default Home;