import {
  Navbar,
  PlanetDetails,
  PlanetImage,
  PlanetInfo,
  Tabs,
  Wrapper,
  useChangeData,
} from '../../components/index';
import { PlanetProps } from '../../data/dataType';

export const Planet = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <Wrapper>
      <Navbar />
      <Tabs />
      <PlanetImage planetData={planetData} />
      <PlanetInfo planetData={planetData} />
      <PlanetDetails planetData={planetData} />
    </Wrapper>
  );
};
