import React from 'react';
import Hamburger from '../../../assets/icons/icon-hamburger.svg';

export const NavMobile = () => {
  return (
    <div className="flex">
      <a className="inline-block text-sm px-4 py-2  text-white" href="#">
        <img src={Hamburger} alt="Hamburger icon" />
      </a>
    </div>
  );
};
