import { PlanetProps } from '@/data/dataType';
import { Image } from '..';

export const PlanetImage = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <div
      className={
        'flex mx-auto h-[100vw] max-h-72 max-w-[' +
        planetData.mobileImgWidth +
        'px] md:max-w-[' +
        planetData.tabletImgWidth +
        'px]'
      }
    >
      <Image
        src={planetData.images.planet}
        alt={planetData.name}
        width={planetData.mobileImgWidth + 'px'}
        className={'m-auto'}
      />
    </div>
  );
};
