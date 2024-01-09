import styled from "styled-components";

import CanvasDraw from "react-canvas-draw";

import { leagueGothic } from "../../pages/_app";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  margin: 32px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  margin: 0 10% 0 5%;

  @media (max-width: 1100px) {
    margin: 0 5% 0 5%;
  }

  @media (max-width: 710px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FlexEndContainer = styled.div`
  @media (max-width: 710px) {
    align-self: flex-end;
    margin-top: -32px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  position: relative;
`;

const SplitTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  margin-top: 90px;

  @media (max-width: 710px) {
    margin-top: 60px;
  }
`;

const Text = styled.span.attrs({
  className: leagueGothic.className,
})`
  font-size: 400px;
  color: #cb3818;

  transform: scale(1, 1.2);

  @media (max-width: 1100px) {
    font-size: 250px;
  }

  @media (max-width: 710px) {
    font-size: 160px;
  }
`;

const Image = styled.img.attrs({
  src: "tom.jpg",
  alt: "a picture of me (looking great)",
})`
  height: 100%;
  width: 100%;

  border-radius: 16px;
  position: absolute;
`;

const CanvasContainer = styled.div`
  height: 550px;
  width: 380px;
  border-radius: 16px;

  background-size: cover;
  overflow: hidden;

  margin-right: 500px;

  position: absolute;

  z-index: 2;

  transform: rotate(-6deg);

  @media (max-width: 1100px) {
    height: 400px;
    width: 280px;
    margin-right: 300px;
  }

  @media (max-width: 710px) {
    height: 300px;
    width: 200px;
    margin-top: -64px;
    margin-right: 250px;
  }

  @media (max-width: 500px) {
    margin-top: -88px;
    margin-right: 140px;
  }

  @media (max-width: 380px) {
    height: 250px;
    width: 180px
  }
`;

const ImageBackgroundContainer = styled(CanvasContainer)`
  z-index: -1;
`;

const Line = styled.span`
  letter-spacing: -35px;

  @media (max-width: 1100px) {
    letter-spacing: -20px;
  }

  @media (max-width: 710px) {
    letter-spacing: -15px;
  }
`;

const LineSpacer = styled.div`
  width: 400px;

  @media (max-width: 1100px) {
    width: 300px;
  }

  @media (max-width: 710px) {
    width: 100px;
  }
`;

const AltText = styled.span.attrs({
  className: leagueGothic.className,
})`
  display: flex;
  font-size: 400px;
  color: #1f0a03;

  background-color: #fffafa;

  z-index: 2;

  transform: scale(1, 1.2);

  @media (max-width: 1100px) {
    font-size: 250px;
  }

  @media (max-width: 710px) {
    font-size: 150px;
  }

  @media (max-width: 400px) {
    font-size: 120px;
  }
`;

const Content = styled.div`
  background-color: #fffafa;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 3;
  width: 100%;

  height: 150px;

  margin-top: -140px;

  padding: 16px 0 0;

  @media (max-width: 1100px) {
    margin-top: -90px;
    height: 120px;

    padding: 0;
  }

  @media (max-width: 710px) {
    margin-top: 0px;
  }
`;

const ContentText = styled.div`
  font-size: 22px;
  text-align: center;
  line-height: 25px;
  font-weight: 700;
  width: 900px;

  color: #1f0a03;

  @media (max-width: 1100px) {
    width: 600px;
    font-size: 20px;
  }

  @media (max-width: 710px) {
    margin: 0 32px;
    width: auto;
    font-size: 18px;
  }
`;

const CutContainer = styled.div`
  margin-top: -270px;

  @media (max-width: 1100px) {
    margin-top: -190px;
  }

  @media (max-width: 710px) {
    display: none;
  }
`;

const Card = styled.div`
  border-radius: 16px;
  background-color: #faf3f1;

  padding: 32px 40px;

  z-index: 4;
`;

const CardText = styled.div`
  font-size: 22px;
  text-align: center;
  line-height: 25px;
  font-weight: 600;

  color: #1f0a03;

  @media (max-width: 710px) {
    font-size: 18px;
  }
`;

const CardContainer = styled.div`
  max-width: 380px;
  margin-left: 10%;

  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    margin-top: 70px;
    margin-left: 5%;
  }

  @media (max-width: 710px) {
    margin-top: 100px;
    align-self: center;
    margin-left: 32px;
    margin-right: 32px;
  }
`;

const Link = styled.a`
  color: #cb3818;

  font-weight: 900;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 100px 16px;

  @media (max-width: 710px) {
    margin: 48px 16px 16px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 64px;

  @media (max-width: 710px) {
    padding: 0;
  }
`;

const Icon = styled.img`
  height: 32px;
  width: auto;
`;

const Spacer = styled.div`
  width: 32px;

  @media (max-width: 710px) {
    width: 16px;
  }
`;

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Text>FULL&nbsp;</Text>
        <FlexEndContainer>
          <Text>ST</Text>
        </FlexEndContainer>
      </TextContainer>
      <ImageContainer>
        <ImageBackgroundContainer>
          <Image />
        </ImageBackgroundContainer>
        <CanvasContainer>
          <CanvasDraw
            style={{
              position: "absolute",
              height: "1000px",
              width: "1000px",
              transform: "rotate(6deg)",
              marginLeft: "-100px",
              marginTop: "-100px",
              cursor: "pointer",
            }}
            brushColor="#cb3818"
            hideInterface
            lazyRadius={3}
            brushRadius={4}
            backgroundColor="rgba(255,0,0,0.0)"
            hideGrid
            canvasWidth={1000}
            canvasHeight={1000}
          />
        </CanvasContainer>
        <LineSpacer />
        <Text>
          <Line>---&nbsp;&nbsp;</Line>ACK
        </Text>
      </ImageContainer>
      <CardContainer>
        <Card>
          <CardText>Hey! 👋 I'm Tom, a dev based in Cardiff.</CardText>
        </Card>
      </CardContainer>
      <SplitTextContainer>
        <AltText>ENGINEER</AltText>
        <Content>
          <ContentText>
            With a love of problem solving and an affinity for design and UX,
            currently working at{" "}
            <Link href="https://www.veygo.com" target="_blank" rel="noreferrer">
              Veygo
            </Link>
            .
          </ContentText>
        </Content>
        <CutContainer>
          <AltText>ENGINEER</AltText>
        </CutContainer>
      </SplitTextContainer>
      <InfoContainer>
        <Card>
          <IconContainer>
            <a
              href="https://github.com/tomfullylove"
              target="_blank"
              rel="noreferrer"
            >
              <Icon src="/github.svg" alt="Github Logo" />
            </a>
            <Spacer />
            <a
              href="https://www.linkedin.com/in/tom-fullylove-6a382a189/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon src="/linkedin.svg" alt="Linkedin Logo" />
            </a>
            <Spacer />
            <CardText>
              <Link href="mailto:tom@fullylove.co.uk">tom@fullylove.co.uk</Link>
            </CardText>
          </IconContainer>
        </Card>
      </InfoContainer>
    </Wrapper>
  );
};

export default Intro;
