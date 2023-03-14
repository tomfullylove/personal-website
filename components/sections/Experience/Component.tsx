import { useState } from "react";
import styled from "styled-components";

import { Card, Title } from "../../atoms";
import { IconList, Timeline } from "../../molecules";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 60vh;
  width: 100vw;
  max-width: 2500px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  margin: 128px;

  flex-grow: 1;

  @media (max-width: 1250px) {
    flex-direction: column;
  }

  @media (max-width: 710px) {
    margin: 128px 32px;
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
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
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
  height: 100px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 0 0 32px;
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

const Intro: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title text="EXPERIENCE" />
        <TextContainer>
          <Text>
            Working as a full stack engineer <Highlight>( </Highlight>
            with an affinity for design and all things front-end
            <Highlight> )</Highlight> since 2019 after graduating with a BSc in
            Computer Science from Loughborough University 🧑‍🎓
          </Text>
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
                  Poutine 3 wolf moon YOLO slow-carb, single-origin coffee raw
                  denim trust fund fanny pack selvage occupy four loko
                  post-ironic mukbang. <br /> <br /> Cupping iceland leggings
                  single-origin coffee shoreditch. Hell of blog leggings neutral
                  milk hotel shoreditch portland sus lyft taxidermy grailed man
                  bun mlkshk yuccie ascot. <br /> <br /> Shabby chic PBR&B
                  activated charcoal swag.
                </CardText>
              </CardContent>
            </CardContainer>
          </Card>
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
        </TextContainer>
      </Content>
    </Container>
  );
};

export default Intro;
