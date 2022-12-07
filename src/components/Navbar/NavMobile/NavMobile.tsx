import React from 'react';
import { IconHamburger, useToggleMenu } from '../../index';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu';

export const NavMobile = () => {
  const { toggleMenu, isOpen, resetMenu } = useToggleMenu();
  return (
    <>
      <div className="md:hidden flex">
        <a className="inline-block text-sm px-4 py-2  text-white" href="#">
          <IconHamburger onClick={toggleMenu} isOpen={isOpen} />
        </a>
      </div>
      {isOpen && <BurgerMenu isOpen={isOpen} resetMenu={resetMenu} />}
    </>
  );
};
