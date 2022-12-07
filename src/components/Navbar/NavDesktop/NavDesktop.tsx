import React from 'react';
import { Link } from 'react-router-dom';
import { planetsData } from '../../../data/data';

export const NavDesktop = () => {
  return (
    <div className="hidden md:flex items-center">
      {planetsData.map((planet) => (
        <Link
          key={planet.name}
          className="inline-block text-sm px-4 py-2  text-white"
          to={'/' + planet.name}
        >
          {planet.name}
        </Link>
      ))}
    </div>
  );
};
