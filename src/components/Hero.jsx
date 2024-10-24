import React from 'react';

import heroVid from '../assets/OppAI_3.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div id="about" className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
      </div>
    </div>
  );
};

export default Hero;
