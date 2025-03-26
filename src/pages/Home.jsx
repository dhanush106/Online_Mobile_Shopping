import React from 'react';
import Hero from '../components/Hero';
import LatesMobiles from '../components/LatesMobiles';

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <div className="title latest">
          <h1>--Latest Mobiles--</h1>
        </div>
        <LatesMobiles />
    </div>
  )
}

export default Home;