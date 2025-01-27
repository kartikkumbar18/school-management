import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import Footer from '../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      
      
      <div className="w-[60%] h-auto bg-red-600 mb-28 mt-40 mx-auto p-6 border-2 border-black rounded-lg">
        <div className="mb-4 bg-blue-900 text-white p-4 rounded-lg">
          <h1 className="text-xl font-bold mb-2">Vision</h1>
          <p>
            Our mission is to create a world where everyone has the opportunity
            to live a fulfilling life, one moment at a time.
          </p>
        </div>
        <div className="bg-blue-900 text-white p-4 rounded-lg">
          <h1 className="text-xl font-bold mb-2">Mission</h1>
          <p>
            We aim to foster innovation, provide exceptional services, and
            empower individuals to achieve their greatest potential.
          </p>
        </div>
      </div>
      <div className='mb-12'>
            <Carousel/>
      </div>

      <div>
        <Footer/>
      </div>

    </>
  );
};

export default LandingPage;
