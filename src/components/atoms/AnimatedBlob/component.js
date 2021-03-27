import React from 'react';
import styled, { keyframes }  from 'styled-components';

import BlobImage from '../../../assets/blob.svg'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const floatx = keyframes`
  0% {
    transform: translatex(0);
  }
  25% {
    transform: translatex(6px);
  }
  50% {
    transform: translatex(4px);
  }
  75% {
    transform: translatex(-2px);
  }
  100% {
    transform: rotate(0);
  }
`;

const floaty = keyframes`
  0% {
    transform: translatey(0);
  }
  25% {
    transform: translatey(-3px);
  }
  50% {
    transform: translatey(-5px);
  }
  75% {
    transform: translatey(4px);
  }
  100% {
    transform: translatey(0);
  }
`;

const BlobRotate = styled.div`
  animation: ${rotate} 8s linear infinite;
`;


const Blob = styled.img.attrs({
  src: BlobImage,
  draggable: false
})`
  animation: ${floaty} 8s linear infinite;
  height: 55vh;
  width: auto;
`;

const BlobFloat = styled.div`
  animation: ${floatx} 10s linear infinite;
`;

const AnimatedBlob = () => {
  return (
    <BlobFloat>
      <BlobRotate>
        <Blob />
      </BlobRotate>
  </BlobFloat>
  );
}

export default AnimatedBlob;
