import React from 'react';
import LogoComponent from './LogoComponent/LogoComponent';
import LinksComponent from './LinksComponents/LinksComponents';
import NavButtonsComponent from './NavButtons/NavButtons';

const HeaderComponent = (props) => {
  return (
    <header className='flex flex-col leading-6 fixed w-full z-[1100] justify-center '>
      <div className='bg-[#212121] text-white text-base h-11 flex items-center justify-center'>
        <p>
          Dante AI’s investor community is growing - find out more
          <a href='/investors/' className='ml-[4px] underline font-semibold'>
            here
          </a>
          .
        </p>
      </div>

      <div className='bg-white px-6 w-[1536px] mx-auto'>
        <div className='px-6'>
          <div className='flex items-center justify-between mx-auto pt-8 pb-6'>
            {/* Logo component */}
            <LogoComponent />
            {/* links components */}
            <LinksComponent />
            {/* Navigation Buttons */}
            <NavButtonsComponent />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
