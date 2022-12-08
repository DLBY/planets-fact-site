import { PlanetProps } from '@/data/dataType';
import { Image } from '..';

export const PlanetImage = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={planetData.images.planet}
        alt={planetData.name}
        width={planetData.mobileImgWidth}
        className={
          'w-[' + planetData.mobileImgWidth + 'px] md:w-[' + planetData.tabletImgWidth + 'px]'
        }
      />
    </div>
  );
};
