import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 80px;
  margin-bottom: 70px;
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  display: flex;
  gap: 10px;
  width: 80%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Dash = styled.div`
  width: 20%;
  height: 1px;
  background-color: #e6e600;
`;

const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
      <Description>
        <Desc>
          <Dash></Dash>
          I'm passionate about being able to push the limits with modern
          technology, and use computing power and intelligent algorithms to
          develop new innovations that are faster and scalable in order to have
          an impact on my community and the world.
        </Desc>
      </Description>
    </Container>
  );
};

export default About;
