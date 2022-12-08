import { PlanetProps } from '@/data/dataType';
import { IconSource } from '..';

export const PlanetInfo = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-4xl font-serif">{planetData.name}</h1>
      <p className="text-xs font-light leading-medium text-center px-6 mt-4 mb-8">
        {planetData.overview.content}
      </p>
      <p className="text-xs font-light text-gray">
        Source:{' '}
        <a href={planetData.overview.source} className="text-gray hover:underline" target="_blank">
          <span className="mr-2">Wikipedia</span>
          <IconSource />
        </a>
      </p>
    </section>
  );
};
