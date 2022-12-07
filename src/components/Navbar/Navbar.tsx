import React from 'react';
import { Link } from 'react-router-dom';
import { NavDesktop } from './NavDesktop/NavDesktop';
import { NavMobile } from './NavMobile/NavMobile';

export const Navbar = () => {
  return (
    <header className="flex md:flex-col lg:flex-row justify-between items-center p-4 border-b border-gray-secondary">
      <div className="flex items-center">
        <Link to="/" className="font-serif text-3xl uppercase tracking-tightest">
          The Planets
        </Link>
      </div>
      <NavDesktop />
      <NavMobile />
    </header>
  );
};
