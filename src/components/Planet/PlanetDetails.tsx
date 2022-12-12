import { PlanetProps } from '@/data/dataType';
import { FramedInfo } from '..';

export const PlanetDetails = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <section className="flex flex-col justify-between items-center my-8 px-6 gap-2">
      <FramedInfo title="Rotation Time">
        <p className="text-xl font-serif font-medium leading-medium text-center ">
          {planetData.rotation}
        </p>
      </FramedInfo>
      <FramedInfo title="Revolution Time">
        <p className="text-xl font-medium font-serif leading-medium text-center">
          {planetData.revolution}
        </p>
      </FramedInfo>
      <FramedInfo title="Radius">
        <p className="text-xl font-medium font-serif leading-medium text-center">
          {planetData.radius}
        </p>
      </FramedInfo>
      <FramedInfo title="Average Temperature">
        <p className="text-xl font-medium font-serif leading-medium text-center">
          {planetData.temperature}
        </p>
      </FramedInfo>
    </section>
  );
};
