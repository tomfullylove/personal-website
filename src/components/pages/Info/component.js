import React from 'react';
import styled from 'styled-components';

import MainHeading from '../../molecules/MainHeading';
import CrossedOutText from '../../atoms/CrossedOutText';

import PaintingOne from '../../../assets/painting-1.jpg'
import PaintingTwo from '../../../assets/painting-4.jpg'

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
  justify-content: space-around;
  align-items: center;
  width: 85%;
  margin-top: ${({ marginTop }) => marginTop || 0}vh;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 2800px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #1a1816;
  width: 100%;
  border-radius: 8px;
  margin: 20vh 3vw 20vh 0;

  padding: 28px;
  
  :first-child {
    margin-left: 3vw;
  } 
`;

const CardTitle = styled.h3`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 26px;

  padding-bottom: 16px;
`;

const CardText = styled.p`
  color: #F5ECEC;
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 22px;
`;

const ImageTopContainer = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 15%;
`;

const ImageTopText = styled.p`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 16px;
  letter-spacing: 0.6px;
  line-height: 22px;
  width: 95%;
  margin-bottom: 36px;
`;

const ImageTop = styled.img.attrs({
  src: PaintingTwo
})`
  height: auto;
  width: 100%;
  margin-left: 24px;
`;

const ImageBottomContainer = styled.div`
  width: 36%;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: 15%;
`;

const ImageBottomText = styled.p`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 16px;
  letter-spacing: 0.6px;
  line-height: 22px;
  width: 95%;
  margin-right: -24px;
  align-self: flex-end;
`;

const ImageBottom = styled.img.attrs({
  src: PaintingOne
})`
  height: auto;
  width: 100%;
  margin-bottom: 36px;
`;


const Info = () => {
  return (
    <Container>
      <Content marginTop={20}>
        <ImageTopContainer>
          <ImageTopText>
            A candid shot of inital concepts, thoughts and designs being discussed with a client
          </ImageTopText>
          <ImageTop />
        </ImageTopContainer>
        <MainHeading />
      </Content>
      <InfoContainer>
        <Card>
          <CardTitle>Banjo bitters freegan</CardTitle>
          <CardText>
            Poutine bushwick bicycle rights hashtag, schlitz art party blog chia blue bottle irony 
            subway tile quinoa pitchfork ennui bespoke
          </CardText>
        </Card>
        <Card>
          <CardTitle>Banjo bitters freegan</CardTitle>
          <CardText>
            Williamsburg bitters vape cornhole poke church-key, pug pop-up jean shorts umami adaptogen
            lumbersexual paleo. Cornhole man bun vegan pork belly hot chicken. Shabby chic hashtag
          </CardText>
        </Card>
        <Card>
          <CardTitle>Banjo bitters freegan</CardTitle>
          <CardText>
            Enamel pin kombucha crucifix, literally blue bottle four dollar toast irony raw denim pabst.
            Thundercats pork belly fanny pack, 90's seitan narwhal retro taxidermy kogi art party locavore
            roof party shaman
          </CardText>
        </Card>
        <Card>
          <CardTitle>Banjo bitters freegan</CardTitle>
          <CardText>
            Williamsburg bitters vape cornhole poke church-key, pug pop-up jean shorts umami adaptogen
            lumbersexual paleo. Cornhole man bun vegan pork belly hot chicken
          </CardText>
        </Card>
      </InfoContainer>
      <Content>
        <CrossedOutText />
          <ImageBottomContainer>
            <ImageBottom />
            <ImageBottomText>
              A shot of me hard at work listening to a clients feedback during development
            </ImageBottomText>
          </ImageBottomContainer>
      </Content>
    </Container>
  );
}

export default Info;
