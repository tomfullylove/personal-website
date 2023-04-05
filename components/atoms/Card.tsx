import styled from "styled-components";

interface Props {
  children: React.ReactElement;
}

const Container = styled.div`
  background-color: #1a1816;

  padding: 32px;

  border-radius: 16px;
`;

const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
