import React from 'react';
import LoginComponent from './LoginComponent/LoginComponent';
import BuildChatForFreeComponent from './BuildChatForFreeComponent/BuildChatForFree';

const NavButtonsComponent = (props) => {
  return (
    <div className='flex gap-2'>
      <LoginComponent />
      <BuildChatForFreeComponent />
    </div>
  );
};

export default NavButtonsComponent;
