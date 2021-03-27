import React from 'react';
import styled from 'styled-components';

import ImageOne from '../../../assets/card-horizontal.jpg';
import ImageTwo from '../../../assets/card-vertical.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
  max-width: 2500px;
  padding: 5vh 0;
  flex-wrap: wrap;
`;

const CardVertical = styled.div`
  height: 500px;
  width: 400px;
  margin-top: 10vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  // background-color: #1a1816;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 3px 0px, rgba(0, 0, 0, 0.4) 0px 0px 10px 0px;
`;

const ImageVertical = styled.img.attrs({
  draggable: false
})`
  width: 400px;
  height: auto;
`;

const CardHorizontal = styled.div`
  height: 400px;
  width: 750px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  // background-color: #1a1816;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
`;

const ImageHorizontal = styled.img.attrs({
  draggable: false
})`
  height: 400px;
  width: auto;
  margin-right: 24px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  color: #F5ECEC;
  font-family: Crimson Pro;
  font-size: 26px;

  padding: 16px 0 16px 0;
`;

const CardText = styled.p`
  color: #F5ECEC;
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 22px;
`;


const Projects = () => {
  return (
    <>
      <Container>
        <CardHorizontal>
          <ImageHorizontal src={ImageOne} />
          <CardContent>
            <CardTitle>Seitan helvetica</CardTitle>
            <CardText>
              Bicycle rights meggings slow-carb lomo drinking vinegar. Next level
              lomo organic sriracha yuccie gentrify.
            </CardText>
          </CardContent>
        </CardHorizontal>
        <CardVertical>
          <ImageVertical src={ImageTwo} />
          <CardContent>
            <CardTitle>Seitan helvetica</CardTitle>
            <CardText>
              VHS gastropub palo santo XOXO activated charcoal woke cold-pressed actually.
            </CardText>
          </CardContent>
        </CardVertical>
      </Container>
      <Container>
        <CardVertical>
          <ImageVertical src={ImageTwo} />
          <CardContent>
            <CardTitle>Seitan helvetica</CardTitle>
            <CardText>
              Next level lomo organic sriracha yuccie gentrify VHS.
            </CardText>
          </CardContent>
        </CardVertical>
        <CardHorizontal>
          <ImageHorizontal src={ImageOne} />
          <CardContent>
            <CardTitle>Seitan helvetica</CardTitle>
            <CardText>
              Next level lomo organic sriracha yuccie gentrify
              VHS gastropub palo santo XOXO activated.
            </CardText>
          </CardContent>
        </CardHorizontal>
      </Container>
    </>
  );
}

export default Projects;
