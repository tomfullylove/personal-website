import React from 'react';
import styled from 'styled-components';

import Burger from './components/atoms/Burger';

import IntroScreen from './components/pages/Intro';
import InfoScreen from './components/pages/Info';
// import ProjectScreen from './components/pages/Projects';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ color }) => color};
`;

const App = () => {
  return (
    <>
      <Burger />
      <Wrapper color='#0F0E0D'>
        <IntroScreen />
        <InfoScreen />
      </Wrapper>
    </>
  );
}

export default App;
