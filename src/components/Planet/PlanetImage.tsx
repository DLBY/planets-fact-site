import { PlanetProps } from '@/data/dataType';
import { Image, useChangeData } from '..';

export const PlanetImage = ({ planetData }: { planetData: PlanetProps }) => {
  // console.log('planetImage', currentData);
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
