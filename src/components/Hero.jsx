import styled from "styled-components";
import Ayomide from "../img/Ay Image.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 100px;
  height: Calc(100vh - 70px);
  margin-bottom: 70px;

  @media (max-width: 1389px) {
    gap: 20px;
  }
  @media (max-width: 1211px) {
    gap: 10px;
  }
  @media (max-width: 820px) {
    flex-direction: column-reverse;
  }
  @media (min-height: 800px) {
    margin-top: -100px;
  }
`;

const Left = styled.div`
  font-size: 25px;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1230px) {
    padding-left: 50px;
  }

  @media (max-width: 818px) {
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding-left: 0px;
  }
  @media (max-width: 493px) {
    font-size: 20px;
  }
`;

const P = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Name = styled.h2`
  font-family: "Platypi", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: #e6e600;
  font-size: 60px;
  letter-spacing: 5px;
  margin-left: 5px;

  @media (max-width: 1388px) {
    font-size: 50px;
  }
  @media (max-width: 1147px) {
    font-size: 40px;
  }
  @media (max-width: 493px) {
    font-size: 30px;
  }
  @media (max-width: 420px) {
    margin-bottom: -20px;
  }
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
  @media (max-width: 420px) {
    width: fit-content;
  }
`;

const Image = styled.img`
  margin-top: -70px;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1146px) {
    height: 80%;
  }

  @media (max-width: 1147px) {
    height: 70%;
  }

  @media (max-width: 818px) {
    height: 70%;
  }
  @media (max-width: 350px) {
    height: 60%;
  }
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
