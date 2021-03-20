import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 128px;
`;

const Text = styled.h2`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 128px;
`;

const Line = styled.div`
  position: absolute;
  background-color: #DB1162;
  height: 15px;
  width: 100%;
  bottom: 40px;
`;

const CrossedOutText = () => {
  return (
    <Container>
      <Text>normal</Text>
      <Line />
    </Container>
  );
}

export default CrossedOutText;
