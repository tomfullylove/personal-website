import styled from "styled-components";

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
  align-items: center;
  margin: 64px 128px;
  flex-grow: 1;
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

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Text>
          <Link href="mailto:tom@fullylove.co.uk" rel="noreferrer">
            tom@fullylove.co.uk
          </Link>
        </Text>
      </Content>
    </Container>
  );
};

export default Footer;
