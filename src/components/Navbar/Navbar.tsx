import React from 'react';
import { NavDesktop } from './NavDesktop/NavDesktop';
import { NavMobile } from './NavMobile/NavMobile';

export const Navbar = () => {
  return (
    <nav className="flex md:flex-col lg:flex-row justify-between items-center p-4 border-b border-gray-secondary">
      <div className="flex items-center">
        <span className="font-serif text-3xl uppercase tracking-tightest">The Planets</span>
      </div>
      <NavDesktop />
      <NavMobile />
    </nav>
  );
};
