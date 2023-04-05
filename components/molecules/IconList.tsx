import styled from "styled-components";

interface Icon {
  src: string;
  alt: string;
}

interface Props {
  icons: Array<Icon>
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  align-self: center;

  margin: 32px 0;
`;

const Icon = styled.img`
  height: auto;
  width: 32px;

  margin: 16px 32px;
`;

const IconList: React.FC<Props> = ({ icons }) => {
  return (
    <Container>
      {icons.map((icon, index) => (
        <Icon key={`icon-${index}`} src={icon.src} alt={icon.alt} />
      ))}
    </Container>
  );
};

export default IconList;
