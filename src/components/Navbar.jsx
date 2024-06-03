import styled from "styled-components";
import logo from "../img/logo.png";

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 80px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 50px;
  width: 60px;
  object-fit: cover;
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
`;

const Navbar = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Middle>
        <Span>
          <A href="">About</A>
        </Span>
        <Span>
          <A href="">Portfolio</A>
        </Span>
        <Span>
          <A href="">Contact</A>
        </Span>
      </Middle>
      <Right>Download CV</Right>
    </Container>
  );
};

export default Navbar;
