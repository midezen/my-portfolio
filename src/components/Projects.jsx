import styled from "styled-components";
import { projectsData } from "../data";

const Container = styled.div`
  margin-bottom: 70px;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 80%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  height: 200px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #181818;
  border-radius: 10px;
  padding-bottom: 10px;

  &:hover {
    scale: 1.1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  border-radius: 10px;
`;

const Name = styled.span`
  font-size: 16px;
`;

const Projects = () => {
  return (
    <Container>
      <Heading>Projects</Heading>
      <ItemsWrapper>
        <Items>
          {projectsData.map((project) => {
            return (
              <Item key={project.id}>
                <Image src={project.image} alt={project.name} />
                <Name>{project.name}</Name>
              </Item>
            );
          })}
        </Items>
      </ItemsWrapper>
    </Container>
  );
};

export default Projects;
