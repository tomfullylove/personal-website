import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface LineProps {
  selected: boolean;
}

const down = keyframes`
  0% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(11px);
  }
  100% {
    transform: translatey(11px) rotate(45deg);
  }
`;

const downReverse = keyframes`
  0% {
    transform: translatey(11px) rotate(45deg);
  }
  50% {
    transform: translatey(11px) rotate(0);
  }
  100% {
    transform: translatey(0) rotate(0);
  }
`;

const up = keyframes`
  0% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-11px);
  }
  100% {
    transform: translatey(-11px) rotate(-45deg);
  }
`;

const upReverse = keyframes`
  0% {
    transform: translatey(-11px) rotate(-45deg);
  }
  50% {
    transform: translatey(-11px) rotate(0);
  }
  100% {
    transform: translatey(0) rotate(0);
  }
`;

const center = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const centerReverse = keyframes`
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 16px;
  right: 32px;
  top: 32px;
  cursor: pointer;

  z-index: 10;

  animation: ${fade} 1s forwards;
`;

const Line = styled.div<LineProps>`
  height: 3px;
  width: 30px;
  background-color: #000;
  border-radius: 3px;

  ${({ selected }) => css`animation: ${ selected ? center : centerReverse} 0.4s forwards;`}

  :first-child {
    margin-bottom: 8px;

    ${({ selected }) => css`animation: ${ selected ? down : downReverse} 0.4s forwards;`}
  }
  :last-child {
    margin-top: 8px;

    ${({ selected }) => css`animation: ${ selected ? up : upReverse} 0.4s forwards;`}
  }
`;

const Burger: React.FC = () => {
  const [ selected, setSelected] = useState(false);
  return (
    <>
      <Container onClick={() => setSelected(!selected)}>
        <Line selected={selected} />
        <Line selected={selected} />
        <Line selected={selected} />
      </Container>
    </>
  );
}

export default Burger;
