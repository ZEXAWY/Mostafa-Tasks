import React from 'react';
import DanteLogo from '../../assets/Images/dante-dark.webp';
const FooterComponent = (props) => {
  return (
    <footer className='mt-[60px] px-[34px] py-[60px] bg-black text-white flex justify-center'>
      <div classname='font-normal text-base leading-6 text-white p-0 m-0 w-full mx-auto box-border block pl-6 pr-6 max-w-2xl'>
        <div className='font-normal text-base leading-6 text-white box-border p-0 m-0 flex flex-col-reverse'>
          <div className='font-normal text-base leading-6 text-white m-0 box-border flex flex-wrap flex-row mt-[-16px] w-[calc(100% + 16px)] ml-[-16px] items-center border-b border-solid border-gray-800 pb-40 order-1'>
            <div className='font-normal text-base leading-6 text-white p-0 box-border m-0 flex flex-row flex-shrink-0 flex-grow-0 max-w-[50%] flex-basis-[50%] pl-16 pt-16'>
              <div className='font-normal text-base leading-6 text-white box-border m-0 flex flex-row items-center justify-start p-24'>
                <a
                  className='font-normal text-base leading-6 box-border p-0 m-0 text-white no-underline flex'
                  href='https://www.linkedin.com/company/dante-ai/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedIn'
                >
                  <svg
                    className='font-normal leading-6 text-white box-border p-0 m-0 select-none w-4 h-4 inline-block flex-shrink-0 transition duration-200 ease-in fill-current text-current'
                    focusable='false'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    data-testid='LinkedInIcon'
                    size='22'
                  >
                    <path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className='font-normal text-base leading-6 text-white p-0 box-border m-0 flex flex-row flex-shrink-0 flex-grow-0 max-w-[50%] flex-basis-[50%] pl-16 pt-16'>
              <div className='font-normal text-base leading-6 text-white box-border p-0 m-0 flex items-center flex-row justify-end'>
                <p className='text-white box-border p-0 font-sans font-normal text-base leading-6 m-0'>
                  Ready to try Dante AI?
                </p>
                <a
                  className='box-border bg-gray-900 rounded-lg font-semibold text-base leading-6 no-underline text-white p-3 md:p-4 m-0 ml-4'
                  sx='[object Object]'
                  component='[object Object]'
                  href='https://chat.dante-ai.com/sign-up'
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className='font-normal text-base leading-6 text-white m-0 box-border flex flex-wrap w-full flex-row p-10 order-0'>
            <div className='font-normal text-base leading-6 text-white p-0 m-0 box-border flex flex-row flex-shrink-0 flex-grow-0 max-w-[58.333333%] flex-basis-[58.333333%]'>
              <div className='font-normal text-base leading-6 box-border p-0 m-0 flex flex-row text-white justify-start'>
                <a href='/'>
                  <img
                    alt='Logo'
                    loading='lazy'
                    width='123'
                    height='32'
                    decoding='async'
                    data-nimg='1'
                    sizes='122px'
                    src={DanteLogo}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='font-normal text-base leading-6 text-white box-border p-0 m-0 flex flex-col'>
          <div
            className='font-normal text-base leading-6 text-white box-border m-0 items-center w-full p-0 pb-40'
            spacing='2'
          >
            <div className='font-normal text-base leading-6 text-white box-border p-0 m-0 flex w-full flex-row justify-between'>
              <div className='font-normal text-base leading-6 text-white p-0 m-0 box-border flex flex-row'>
                <div className='box-border p-0 m-0 flex flex-row text-white text-opacity-60 font-normal leading-6 justify-start mt-0 text-base text-left'>
                  © 2023 Dante AI Inc. All rights reserved.
                  <br />
                  Dante AI Inc. Suite 201, 651 N Broad St, Delaware, 19709,
                  United States
                </div>
              </div>
              <div className='font-normal text-base leading-6 text-white p-0 m-0 box-border flex flex-row'>
                <div className='font-normal text-base leading-6 text-white box-border p-0 m-0 flex items-center opacity-60 flex-row justify-end'>
                  <a
                    color='white'
                    underline='hover'
                    href='http://status.dante-ai.com/'
                  >
                    System Status
                  </a>
                  <a
                    target=''
                    color='white'
                    underline='hover'
                    href='/privacy-policy/'
                  >
                    Terms of Service
                  </a>
                  <a
                    target=''
                    color='white'
                    underline='hover'
                    href='/privacy-policy/'
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
