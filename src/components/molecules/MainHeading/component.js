import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const TextBlock = styled.div`
  background-color: #DB1162;
  height: 80px;
  width: ${({ width }) => width || 20}em;
  margin: 1.3em ${({ marginRight }) => marginRight || 1}em 0 ${({ marginLeft }) => marginLeft || 1}em;
`;

const MainHeading = () => {
  return (
    <TextContainer>
      <TextRowContainer>
        <TextBlock
          marginLeft={0}
          marginRight={1.3}
          width={16}
        />
        <Text>web</Text>
      </TextRowContainer>
      <Text>design made</Text>
      <TextRowContainer>
        <Text>for</Text>
        <TextBlock
          marginLeft={1.3}
          marginRight={0.5}
          width={22}
        />
        <Text>.</Text>
      </TextRowContainer>
    </TextContainer>
  );
}

export default MainHeading;
