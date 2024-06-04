import styled from "styled-components";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import logo from "./img/logo.png";

const Container = styled.div`
  background-color: #202020;
  color: white;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  height: fit-content;
`;
const Navbar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    padding: 20px 20px;
  }

  @media (max-width: 447px) {
    padding: 20px 5px;
  }
  @media (max-width: 415px) {
    padding: 20px 10px;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 60px;
  object-fit: cover;
  @media (max-width: 415px) {
    display: none;
  }
`;

const Middle = styled.div`
  display: flex;
  gap: 20px;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s linear;

  &:hover {
    border-bottom: 1px solid #e6e600;
  }
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Right = styled.div`
  border: 1px solid #e6e600;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #e6e600;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 354px) {
    padding: 10px 5px;
  }
`;

const App = () => {
  return (
    <Container>
      <Navbar>
        <Logo src={logo} alt="logo" />
        <Middle>
          <Span>
            <A href="#about">About</A>
          </Span>
          <Span>
            <A href="#projects">Portfolio</A>
          </Span>
          <Span>
            <A href="#contact">Contact</A>
          </Span>
        </Middle>
        <A href="https://docs.google.com/document/d/1Y1xlfEYiLMQRsdygJjV0RQR00LtLiPgA/edit?usp=drive_link&ouid=118246841928943368417&rtpof=true&sd=true">
          <Right>My Resume</Right>
        </A>
      </Navbar>
      <Hero />
      <div id="about">
        <About />
      </div>
      <Skills />
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Container>
  );
};

export default App;
