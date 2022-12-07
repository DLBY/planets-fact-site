import React from 'react';
import { Navbar, Wrapper } from '../../components/index';
import { PlanetProps } from '../../data/dataType';

export const Planet = ({ planetData }: { planetData: PlanetProps }) => {
  return (
    <Wrapper>
      <Navbar />
      <h1>{planetData.name}</h1>
    </Wrapper>
  );
};
