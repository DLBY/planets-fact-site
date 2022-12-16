import { planetsData } from '@/data/data';
import { PlanetProps } from '@/data/dataType';
import { useState } from 'react';
import { useChangeData } from '..';

export const Tabs = ({ planetData }: { planetData: PlanetProps }) => {
  const { currentTab, handleClick } = useChangeData(planetData);

  return (
    <div className="flex px-6 font-bold justify-between border-b border-gray-secondary/50">
      <button
        className={
          `py-5 uppercase text-xxs
            ` + (currentTab === 'overview' ? 'text-white' : 'text-gray')
        }
        data-type={'overview'}
        onClick={handleClick}
      >
        overview
      </button>
      <button
        className={
          `py-5 uppercase text-xxs
            ` + (currentTab === 'structure' ? 'text-white' : 'text-gray')
        }
        data-type={'structure'}
        onClick={handleClick}
      >
        structure
      </button>
      <button
        className={
          `py-5 uppercase text-xxs
            ` + (currentTab === 'geology' ? 'text-white' : 'text-gray')
        }
        data-type={'geology'}
        onClick={handleClick}
      >
        geology
      </button>
    </div>
  );
};
