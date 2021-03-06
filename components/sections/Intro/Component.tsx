import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 65%;
`;

const Title = styled.h1`
  color: #e6e6e6;
  font-family: 'Pacifico', cursive;
  font-size: 125px;
`;

const TextContainer = styled.div`
  margin: -40px 0 0 40px;
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  color: #363030;
  font-family: Crimson Pro;
  font-size: 20px;
  font-weight: 800;
  line-height: 30px;
  margin-bottom: 16px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 32px 15% 0;
`;

const Icon = styled.img`
  height: 32px;
  width: auto;
`;

const Link = styled.a`
  color: #b823fc;
  text-decoration: none;
`;

const Intro = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Howdy</Title>
        <TextContainer>
          <Text>
            Iām Tom Fullylove š a full stack software engineer
            <Link href="https://www.veygo.com" target="_blank" rel="noreferrer"> at Veygo </Link>
            based in Cardiff, working on everything from React
            frontends and Django backends to micro-services
            and APIs on AWS.
          </Text>
          <Text>
            Feel free to check out my countless half-finished
            github projects, fairly boring linkedin profile
            or get in touch at
            <Link href="mailto: tom@fullylove.co.uk"> tom@fullylove.co.uk </Link>
          </Text>
          <IconContainer>
            <a href="https://github.com/tomfullylove" target="_blank" rel="noreferrer"><Icon src="/github.png" /></a>
            <a href="https://www.linkedin.com/in/tom-fullylove-6a382a189/" target="_blank" rel="noreferrer"><Icon src="/linkedin.png" /></a>
          </IconContainer>
        </TextContainer>
      </TitleContainer>
    </Container>
  )
};

export default Intro;
