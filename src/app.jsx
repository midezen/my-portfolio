import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const Container = styled.div`
  background-color: #202020;
  color: white;
  font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </Container>
  );
};

export default App;
