import React from 'react';
import ImageSource from '../../assets/Images/section-1.webp';
import firstSvg from '../../assets/Images/doodle-mirror.47ea89c5.svg';

const HeroComponent = (props) => {
  return (
    <main>
      <div className='mt-[-5px]'>
        <div className='flex max-w-[1440px] w-full mx-auto px-20'>
          <div className='w-[458px] pt-[200px]'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-[54px] leading-tight font-extrabold w-[458px] '>
                Advanced custom AI chatbots trained on your data
              </h1>
              <h2>Zero code. Share on your website in minutes.</h2>
              <div className='flex gap-4 items-center w-fit'>
                <a
                  href='/signup'
                  className='bg-black text-white py-3 px-5 rounded-xl font-semibold'
                >
                  Get Started
                </a>
                <div>
                  2-day free trial <br />
                  No credit card required
                </div>
              </div>
              <div className='relative'>
                <div className='absolute right-[-72px] top-[-149px]'>
                  <p className='text-[12px] bg-[#ffefe0] w-fit px-3 py-2 rounded-xl'>
                    Integrate directly <br />
                    with WhatsApp!
                  </p>
                  <img alt='firstsvg' src={firstSvg} />
                </div>
                <div className='relative w-[400px] h-[400px] border'>
                  <div className=''>
                    <div className='absolute w-full h-full top-0 bottom-0 left-0 right-0'>
                      <iframe
                        src='https://player.vimeo.com/video/879840358?h=970b4254db&badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1'
                        className='w-full h-full rounded-2xl'
                        title='Train the AI, white-label, and embed on your website.'
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={ImageSource}
              alt='first-pic'
              className='aspect-auto mt-[50px]'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroComponent;
