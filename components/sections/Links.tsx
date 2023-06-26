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
  flex-grow: 1;
  margin: 64px 128px;

  @media (max-width: 900px) {
    margin: 64px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 32px;

  @media (max-width: 600px) {
    margin: 8px;
  }
`;

const Text = styled.p`
  color: #e6dada;
  font-weight: 800;
  font-size: 22px;
  line-height: 25px;
  text-align: center;
`;

const Link = styled.a`
  color: #ff2167;
  cursor: pointer;
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

const Links: React.FC = () => {
  return (
    <Container>
      <Content>
        <Card>
          <TextContainer>
            <Text>
              Check out {" "}
              <Link
                href="/tom-fullylove-resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                my resume
              </Link>{" "}
              , half-finished projects or fairly boring linkedin
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

export default Links;
