import styled from "styled-components";

import { IconList, Timeline } from "@components/molecules";
import { Card, Title } from "@components/atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 2500px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 64px 128px 0;
  flex-grow: 1;

  @media (max-width: 1250px) {
    flex-direction: column;
  }

  @media (max-width: 710px) {
    margin: 64px 32px 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 132px 0 0 64px;

  @media (max-width: 1250px) {
    margin: 64px 0 0;
  }
`;

const Text = styled.p`
  font-family: Crimson Pro;
  color: #e6dada;
  font-weight: 800;
  font-size: 22px;
  line-height: 25px;
`;

const Highlight = styled.span`
  color: #ff2167;
  font-weight: 900;
`;

const Link = styled.a`
  font-family: Crimson Pro;
  color: #ff2167;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 64px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 16px 32px;
`;

const CardTitle = styled.h3`
  font-family: Crimson Pro;
  color: #e6dada;
  font-weight: 900;
  font-size: 40px;
  letter-spacing: -3px;
  margin: 0 0 16px;
`;

const CardText = styled.p`
  font-family: Crimson Pro;
  color: #e6dada;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
`;

const Experience: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title text="EXPERIENCE" />
        <TextContainer>
          <Text>
            Have been a full stack engineer <Highlight>( </Highlight>
            with an affinity for design and all things front-end
            <Highlight> )</Highlight> since 2019 after graduating with a BSc in
            Computer Science from Loughborough University 🧑‍🎓
          </Text>
          <Spacer />
          <Text>Working (mostly) with the following stack atm</Text>
          <IconList
            icons={[
              { src: "./react-icon.svg", alt: "React Framework Logo" },
              { src: "./ts-icon.svg", alt: "Typescript Logo" },
              { src: "./django-icon.svg", alt: "Django Framework Logo" },
              { src: "./python-icon.svg", alt: "Python Logo" },
              { src: "./circleci-icon.svg", alt: "CircleCI Logo" },
              { src: "./aws-icon.svg", alt: "Amazon Web Services Logo" },
            ]}
          />
          <Spacer />
          <Card>
            <CardContainer>
              <Timeline to={`${new Date().getFullYear()}`} from="2019" />
              <CardContent>
                <CardTitle>
                  Full Stack Engineer -{" "}
                  <Link
                    href="https://www.veygo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Veygo
                  </Link>
                </CardTitle>
                <CardText>
                  Being part of such a fantastic group of people has really
                  helped me learn and progress as an engineer from the time I
                  started as a junior.
                  <br /> <br />
                  Incredibly lucky to have been involved in lots of different
                  projects, from rebuilding our React Native app to our
                  transition from Django backends to micro-services utilizing
                  API Gateways, lambdas and serverless frameworks in AWS.
                  <br /> <br />
                  Currently working on our core insurance products and heavily
                  involved in feature planning and technical implementation
                  across both our React and Django apps.
                  <br /> <br />
                  Getting the chance to mentor junior engineers and help support
                  a team has also been a awesome experience while really helping
                  me grow as a person.
                </CardText>
              </CardContent>
            </CardContainer>
          </Card>
          <Spacer />
        </TextContainer>
      </Content>
    </Container>
  );
};

export default Experience;
