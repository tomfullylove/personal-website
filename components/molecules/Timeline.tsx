import styled from "styled-components";

interface Props {
  to: string;
  from: string;
}

interface StyledProps {
  color?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85px;
  align-items: center;
  flex-grow: 1;
`;

const Text = styled.div<StyledProps>`
  color: ${({ color }) => color || "#887e7e"};
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -2px;
  margin: 8px 0;
`;

const Circle = styled.div<StyledProps>`
  border: 3px solid ${({ color }) => color || "#887e7e"};
  border-radius: 50%;
  width: 6px;
  height: 6px;
`;

const Line = styled.div`
  width: 3px;
  height: 110px;
  background-color: #887e7e;
`;

const Timeline: React.FC<Props> = ({to, from}) => {
  return (
    <Container>
      <Text color="#e6dada">{to}</Text>
      <Circle color="#ff2167" />
      <Line />
      <Circle />
      <Text>{from}</Text>
    </Container>
  );
};

export default Timeline;
