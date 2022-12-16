import { PlanetProps } from '@/data/dataType';
import { useEffect } from 'react';
import { IconSource } from '..';

export const PlanetInfo = ({
  planetData,
  currentData,
}: {
  planetData: PlanetProps;
  currentData: any;
}) => {
  return (
    <section className="flex flex-col justify-between items-center">
      <h1 className="text-4xl font-serif">{planetData.name}</h1>
      <p className="text-xs font-light leading-medium text-center px-6 mt-4 mb-8">
        {currentData.content}
      </p>
      <p className="text-xs font-light text-gray">
        Source:{' '}
        <a href={currentData.source} className="text-gray hover:underline" target="_blank">
          <span className="mr-2">Wikipedia</span>
          <IconSource />
        </a>
      </p>
    </section>
  );
};
