import React from 'react';
import styled from 'styled-components';

import Burger from './components/atoms/Burger';

import IntroScreen from './components/pages/Intro';
import InfoScreen from './components/pages/Info';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ color }) => color};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 2500px;
`;

const App = () => {
  return (
    <>
      <Burger />
      <Wrapper color='#0F0E0D'>
        <IntroScreen />
        <InfoScreen />
        <Container />
      </Wrapper>
    </>
  );
}

export default App;
