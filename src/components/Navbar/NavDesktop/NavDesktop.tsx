import React from 'react';

export const NavDesktop = () => {
  return (
    <div className="hidden md:flex items-center">
      <a className="inline-block text-sm px-4 py-2  text-white" href="#">
        Mercury
      </a>
      <a className="inline-block text-sm px-4 py-2  text-white" href="#">
        Venus
      </a>
    </div>
  );
};
