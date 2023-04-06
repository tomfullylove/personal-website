import styled from "styled-components";

interface Props {
  text: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;

const Text = styled.h1`
  font-family: Crimson Pro;
  color: #e6dada;
  font-weight: 900;
  font-size: 60px;
  letter-spacing: -4px;
`;

const Line = styled.div`
  width: 45%;
  height: 8px;
  background-color: #ff2167;
  align-self: flex-end;
`;

const Title: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Line />
    </Container>
  );
};

export default Title;
