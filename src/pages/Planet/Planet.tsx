import React from 'react';
import { Navbar, PlanetImage, PlanetInfo, Tabs, Wrapper } from '../../components/index';
import { PlanetProps } from '../../data/dataType';

export const Planet = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <Wrapper>
      <Navbar />
      <Tabs />
      <PlanetImage planetData={planetData} />
      <PlanetInfo planetData={planetData} />
    </Wrapper>
  );
};
