import styled from "styled-components";
import { skillsData } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  font-size: 16px;
`;

const Items2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 10px;
  font-size: 16px;
`;

const Items3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 10px;
  font-size: 16px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  justify-content: center;
  background-color: #181818;
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const Skills = () => {
  return (
    <Container>
      <Heading>Skills</Heading>
      <ItemsWrapper>
        <Items>
          {skillsData.slice(0, 8).map((skill) => {
            return (
              <Item key={skill.id}>
                <Image src={skill.img} alt={skill.name} />
                {skill.name}
              </Item>
            );
          })}
        </Items>
        <Items2>
          {skillsData.slice(8, 11).map((skill) => {
            return (
              <Item key={skill.id}>
                <Image src={skill.img} alt={skill.name} />
                {skill.name}
              </Item>
            );
          })}
        </Items2>
        <Items3>
          {skillsData.slice(11, 13).map((skill) => {
            return (
              <Item key={skill.id}>
                <Image src={skill.img} alt={skill.name} />
                {skill.name}
              </Item>
            );
          })}
        </Items3>
      </ItemsWrapper>
    </Container>
  );
};

export default Skills;
