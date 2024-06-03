import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 30px;
`;

const Top = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Dash = styled.div`
  height: 1px;
  background-color: #e6e600;
  flex: 1;
`;

const H1 = styled.h1``;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const MiddleTop = styled.div`
  display: flex;
  gap: 10px;
`;

const MiddleBottom = styled.div``;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-size: 14px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Contact = () => {
  return (
    <Container>
      <Top>
        <Dash></Dash>
        <H1>Contact</H1>
        <Dash></Dash>
      </Top>
      <Middle>
        <MiddleTop>
          <Item>
            <i class="fi fi-brands-github"></i>
            https://github.com/midezen
          </Item>
          <Item>
            <i class="fi fi-brands-whatsapp"></i>
            08165553289
          </Item>
        </MiddleTop>
        <MiddleBottom>
          <Item>
            <i class="fi fi-rr-envelope"></i>
            mide.wk21@gmail.com
          </Item>
        </MiddleBottom>
      </Middle>
      <Bottom>
        <Dash></Dash>
        <Icons>
          <i class="fi fi-brands-github"></i>
          <i class="fi fi-brands-whatsapp"></i>
          <i class="fi fi-rr-envelope"></i>
        </Icons>
        <Dash></Dash>
      </Bottom>
    </Container>
  );
};

export default Contact;
