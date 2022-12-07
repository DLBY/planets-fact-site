import React from 'react';
import { Navbar, Tabs, Wrapper } from '../../components/index';
import { PlanetProps } from '../../data/dataType';

export const Planet = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <Wrapper>
      <Navbar />
      <Tabs />
      <h1>{planetData.name}</h1>
    </Wrapper>
  );
};
