import React from 'react';

const LinksComponent = (props) => {
  return (
    <div className='h-10 flex items-center'>
      <nav className='flex gap-5 '>
        <ul className='px-2 py-[6px] box-border rounded-lg hover:bg-[#f5f5f5] cursor-pointer'>
          Live Demo
        </ul>
        <ul className='px-2 py-[6px] box-border rounded-lg hover:bg-[#f5f5f5] cursor-pointer'>
          Features
        </ul>
        <ul className='px-2 py-[6px] box-border rounded-lg hover:bg-[#f5f5f5] cursor-pointer'>
          Case Studies
        </ul>
        <ul className='px-2 py-[6px] box-border rounded-lg hover:bg-[#f5f5f5] cursor-pointer'>
          FAQ
        </ul>
        <ul className='px-2 py-[6px] box-border rounded-lg hover:bg-[#f5f5f5] cursor-pointer'>
          Pricing
        </ul>
        <ul className='px-2 py-[6px] box-border rounded-lg hover:bg-[#f5f5f5] cursor-pointer'>
          Affiliate
        </ul>
        <ul className='px-2 py-[6px] box-border rounded-lg hover:bg-[#f5f5f5] cursor-pointer'>
          Contact
        </ul>
      </nav>
    </div>
  );
};

export default LinksComponent;
