import React from 'react';
import styled from 'styled-components';

import StrokeImage from '../../../assets/long-stroke.svg';

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

const Stroke = styled.img.attrs({
  src: StrokeImage,
  draggable: false
})`
  position: absolute;
  height: 25px;
  width: 430px;
  left: -18px;
  bottom: 30px;
`;

const CrossedOutText = () => {
  return (
    <Container>
      <Text>normal</Text>
      <Stroke />
    </Container>
  );
}

export default CrossedOutText;
