import React from 'react';
import styled from 'styled-components';

import Burger from './components/atoms/Burger';
import IntroScreen from './components/pages/Intro';
import MainHeading from './components/molecules/MainHeading';
import CrossedOutText from './components/atoms/CrossedOutText';

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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: ${({ marginTop }) => marginTop || 0}vh;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 60vh;
`;

const App = () => {
  return (
    <>
      <Burger />
      <Wrapper color='#0F0E0D'>
        <IntroScreen />
        <Container>
          <Content marginTop={20}>
            <InfoContainer />
            <MainHeading />
          </Content>
          <Content>
            <CrossedOutText />
            <InfoContainer />
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
