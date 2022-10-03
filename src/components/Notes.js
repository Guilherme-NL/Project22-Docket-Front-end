import styled from "styled-components";

export default function Notes() {
  return (
    <>
      <Container>
        <Title>
          <h1>Título</h1>
          <input />
        </Title>
        <Description>
          <h1>Descrição</h1>
          <input />
        </Description>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding: 20px 10px;

  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Title = styled.div`
  input {
    width: 100%;
    height: 30px;
  }
`;

const Description = styled.div`
  input {
    width: 100%;
    height: 120px;
  }
`;
