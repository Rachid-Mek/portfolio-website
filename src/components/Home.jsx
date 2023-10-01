import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import myPhoto from '../assets/myPhoto.png'; 

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex items-center'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col-reverse sm:flex-row justify-center w-full h-full items-center'>
        <div className='text-left'>
          <p className='text-pink-500 mt-2 sm:mt-4'>Hi my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rachid MEKDOUD</h1>
          <h2 className='text-4xl sm:text-3xl font-bold text-[#8892b0]'>Artificial Intelligence student with experience in full stack development</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a seasoned professional specializing in web development, programming, and artificial intelligence.
            With over four years of programming experience and a deep understanding of artificial intelligence, machine learning,
            and data science
          </p>
          <div>
            <Link to="work" smooth={true} offset={50} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500'>View work 
                <span>
                  <HiArrowNarrowRight className='ml-2  group-hover:rotate-90 duration-300'/>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='text-center mt-4 sm:mt-0'>
          <img src={myPhoto} alt='my Photo' className='rounded-full ml-4 w-20 sm:w-80' />
        </div>
      </div>
    </div>
  );
};

export default Home;
