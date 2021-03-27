import React from 'react';
import styled from 'styled-components';

import StrokeOneImage from '../../../assets/stroke1.svg';
import StrokeTwoImage from '../../../assets/stroke2.svg';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 580px;
`;

const TextRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.h2`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 108px;
`;

const Stroke = styled.img.attrs({
  draggable: false
})`
  height: 80px;
  width: ${({ width }) => width || 20}em;
  margin-top: 1.3em;
  margin-left: ${({ marginLeft }) => marginLeft || 1}em;
  margin-right: ${({ marginRight }) => marginRight || 1}em;
`;

const MainHeading = () => {
  return (
    <TextContainer>
      <TextRowContainer>
        <Stroke
          src={StrokeOneImage}
          marginLeft={0}
          marginRight={1.3}
          width={16}
        />
        <Text>web</Text>
      </TextRowContainer>
      <Text>design made</Text>
      <TextRowContainer>
        <Text>for</Text>
        <Stroke
          src={StrokeTwoImage}
          marginLeft={1.3}
          marginRight={0.1}
          width={22}
        />
        <Text>.</Text>
      </TextRowContainer>
    </TextContainer>
  );
}

export default MainHeading;
