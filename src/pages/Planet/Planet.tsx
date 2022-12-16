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
  const { currentData, currentTab } = useChangeData(planetData);
  console.log('planet', currentData);
  return (
    <Wrapper>
      <Navbar />
      <Tabs planetData={planetData} />
      <PlanetImage planetData={planetData} />
      <PlanetInfo planetData={planetData} currentData={currentData} />
      <PlanetDetails planetData={planetData} />
    </Wrapper>
  );
};
