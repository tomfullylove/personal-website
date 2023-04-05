import styled from "styled-components";

import { Card } from "@components/atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  max-width: 2500px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;

  margin: 64px 128px;

  @media (max-width: 900px) {
    margin: 64px 64px 0;
  }

  @media (max-width: 600px) {
    margin: 64px 32px 0;
  }

  flex-grow: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 32px;

  @media (max-width: 600px) {
    margin: 8px;
  }

  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-family: Crimson Pro;
  color: #e6dada;
  font-weight: 800;
  font-size: 22px;
  line-height: 25px;

  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 32px 0 0;
`;

const Icon = styled.img`
  height: 32px;
  width: auto;

  margin: 8px 32px 0;
`;

const Intro: React.FC = () => {
  return (
    <Container>
      <Content>
        <Card>
          <TextContainer>
            <Text>
              Check out my half-finished projects and fairly boring linkedin
            </Text>
            <IconContainer>
              <a
                href="https://github.com/tomfullylove"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src="/github.svg" />
              </a>
              <a
                href="https://www.linkedin.com/in/tom-fullylove-6a382a189/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon src="/linkedin.svg" alt="Linkedin Logo" />
              </a>
            </IconContainer>
          </TextContainer>
        </Card>
      </Content>
    </Container>
  );
};

export default Intro;
