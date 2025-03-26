import React from 'react';
import Hero from '../components/Hero';
import LatesMobiles from '../components/LatesMobiles';
import MobileScroll from '../components/MobileScroll';

const Home = () => {
  return (
    <div className='home'>
      <h1 style={{ textAlign: "center" }}>Mobile Companies</h1>
      <MobileScroll />
      <Hero />
      <div className="title latest">
        <h1>--Latest Mobiles--</h1>
      </div>
      <LatesMobiles />   
    </div>
  )
}

export default Home;