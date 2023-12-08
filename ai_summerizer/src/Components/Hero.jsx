import React from 'react';
import { logo } from '../assets/';

const Hero = () => {
  const handleClearLocalStorage = () => {
    clearLocalStorage();
  };

  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='ZEX_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() => window.open('https://github.com/ZEXAWY')}
          className='black_btn'>
          Github
        </button>
      </nav>
      <div className='head_text'>
        ZEX <br />
        <span className='text-6xl bg-gradient-to-r from-black via-gray-500 to-black bg-clip-text text-transparent'>
          Weekly task
        </span>
      </div>
      <h1 className='head_text'>
        Summerize Article With <br className='max-md:hidden' />
        <span className='orange_gradient'>ZEX's OpenAI GPT 3.5</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with sumize, an open-source article summerizer
        that transform lenghty articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
