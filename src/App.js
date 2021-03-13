import React from 'react';
import styled from 'styled-components';

import Burger from './components/atoms/Burger';
import AnimatedBlob from './components/atoms/AnimatedBlob';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ color }) => color};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 2500px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 70%;
  min-width: 950px;
  max-width: 2000px;
`;

const BlobContainer = styled.div`
  position: relative;
  transform: scale(1.3);
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 35vh;
`;

const Title = styled.h1`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 164px;
  margin: 0;
`;

const Text = styled.p`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 22px;
  font-weight: 600;
  margin: -16px 0 0 -14vh;
  max-width: 740px;
`;

const App = () => {
  return (
    <>
      <Burger />
      <Wrapper color='#0F0E0D'>
        <Container>
          <TitleContainer>
            <BlobContainer>
              <AnimatedBlob />
            </BlobContainer>
            <TextContainer>
              <Title>ff record</Title>
              <Text>
                Web design pin craft beer viral health goth photo booth. 
                Farm-to-table put a bird on it post-ironic, pug microdosing.
              </Text>
            </TextContainer>
          </TitleContainer>
        </Container>
        <Container />
      </Wrapper>
    </>
  );
}

export default App;
