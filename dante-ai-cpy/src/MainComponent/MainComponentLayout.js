import React from 'react';
import HeroComponent from './HeroComponent/HeroComponent';
import PartnerComponent from './PartnerComponent/PartnerComponent';

const MainComponentLayout = (props) => {
  return (
    <div>
      <HeroComponent />
      <PartnerComponent />
    </div>
  );
};

export default MainComponentLayout;
