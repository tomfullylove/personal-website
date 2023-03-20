import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 800px;
  max-height: 930px;

  width: 100vw;

  max-width: 2500px;

  @media (max-width: 800px) {
    min-height: 900px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 64px;

  flex-grow: 1;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    margin: 64px 32px 0;
  }
`;

const ImageContainer = styled.div`
  background: url("me.JPG");
  background-size: 600px;
  background-position: center; 
  background-repeat: no-repeat;

  max-width: 600px;
  flex-grow: 1;

  border-radius: 8px;

  @media (max-width: 800px) {
    order: 2;
  }

  @media (max-width: 600px) {
    background-size: 100vw;
  }
`;

const Title = styled.h1`
  margin: 32px 0 0 64px;

  font-family: Crimson Pro;
  color: #e6dada;
  font-weight: 900;
  font-size: 160px;

  line-height: 110px;
  letter-spacing: -7px;
  align-self: flex-start;

  @media (max-width: 1150px) {
    font-size: 120px;
    line-height: 85px;
    letter-spacing: -5px;
  }

  @media (max-width: 800px) {
    margin: 0 0 32px;
    order: 1;
  }

  @media (max-width: 600px) {
    font-size: 90px;
    line-height: 65px;
    letter-spacing: -3px;
  }
`;

const Highlight = styled.span`
  color: #ff2167;
`;

const TextContainer = styled.div`
  max-width: 300px;

  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 800px) {
    position: relative;
    order: 3;
    margin-top: 32px;
    max-width: 450px;
  }
`;

const Text = styled.p`
  font-family: Crimson Pro;
  color: #e6dada;

  font-weight: 800;

  font-size: 28px;
  line-height: 30px;
`;

const Intro: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImageContainer />
        <Title>
          <Highlight>TOM</Highlight> <br /> FULLY- <br /> LOVE
        </Title>
        <TextContainer>
          <Text>Hey! 👋 I’m a full stack engineer based in Cardiff, Wales.</Text>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default Intro;
