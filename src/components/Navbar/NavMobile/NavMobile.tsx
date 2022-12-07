import React from 'react';
import { IconHamburger, useToggleMenu } from '../../index';

export const NavMobile = () => {
  const { toggleMenu, isOpen } = useToggleMenu();
  return (
    <div className="md:hidden flex">
      <a className="inline-block text-sm px-4 py-2  text-white" href="#">
        <IconHamburger onClick={toggleMenu} isOpen={isOpen} />
      </a>
    </div>
  );
};
