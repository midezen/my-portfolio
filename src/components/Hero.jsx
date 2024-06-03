import styled from "styled-components";
import Ayomide from "../img/Ay Image.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 100px;
  height: Calc(100vh - 70px);
  margin-bottom: 70px;
`;

const Left = styled.div`
  font-size: 25px;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const P = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const Name = styled.h2`
  font-family: "Platypi", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: #e6e600;
  font-size: 60px;
  letter-spacing: 5px;
`;

const Button = styled.button`
  border: 1px solid #e6e600;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #e6e600;
  font-size: 16px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 30%;
  letter-spacing: 1px;
`;

const Image = styled.img`
  margin-top: -70px;
  height: 100%;
  object-fit: cover;
`;

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // This makes the scroll smooth
    });
  };
  return (
    <Container>
      <Left>
        <P>
          Hi, I'm <Name>Ayomide Oluwadiya</Name>
        </P>
        <P>A Full Stack Web Developer, from Lagos.</P>
        <Button onClick={scrollToBottom}>Contact me</Button>
      </Left>
      <Image src={Ayomide} alt="My Image" />
    </Container>
  );
};

export default Hero;
