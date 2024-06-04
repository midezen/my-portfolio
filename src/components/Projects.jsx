import styled from "styled-components";
import { projectsData } from "../data";
import Drawer from "@mui/material/Drawer";
import { useState } from "preact/hooks";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
  transition: all 0.3s ease-out;

  &:hover {
    scale: 1.1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Name = styled.span`
  font-size: 16px;
`;

const BoxHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: san-serif;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: fit-content;
  height: fit-content;
  background-color: #181818;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

const BoxHeadingSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-family: "Mulish", sans-serif;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const BoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: "Mulish", sans-serif;
`;

const DetailsItemLeft = styled.span`
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const DetailsItemRight = styled.span`
  font-size: 15px;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const handleClick = (project) => {
    setOpen(true);
    setCurrentData(project);
  };
  return (
    <Container>
      <Heading>Projects</Heading>
      <ItemsWrapper>
        <Items>
          {projectsData.map((project) => {
            return (
              <Item key={project.id} onClick={() => handleClick(project)}>
                <Image src={project.image} alt={project.name} />
                <Name>{project.name}</Name>
              </Item>
            );
          })}
        </Items>
      </ItemsWrapper>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box
          sx={{
            width: "700px",
            height: "100vh",
            color: "white",
            "@media (max-width:1024px)": {
              width: "500px",
            },
            "@media (max-width:800px)": {
              width: "300px",
              height: "fit-content",
            },
            "@media (max-width:400px)": {
              width: "300px",
              height: "100%",
            },
          }}
          role="presentation"
          style={{ padding: "10px", backgroundColor: "#181818" }}
        >
          <BoxHeading>
            <IconWrapper onClick={() => setOpen(false)}>
              <ArrowBackIcon />
            </IconWrapper>
            <BoxHeadingSpan>Project Details</BoxHeadingSpan>
            <div></div>
          </BoxHeading>
          <BoxDetails>
            <DetailsItem>
              <DetailsItemLeft>Project Name:</DetailsItemLeft>
              <DetailsItemRight>{currentData?.name}</DetailsItemRight>
            </DetailsItem>
            <DetailsItem>
              <DetailsItemLeft>Project Status:</DetailsItemLeft>
              <DetailsItemRight>{currentData?.status}</DetailsItemRight>
            </DetailsItem>
            <DetailsItem>
              <DetailsItemLeft>Project Description:</DetailsItemLeft>
              <DetailsItemRight>{currentData?.desc}</DetailsItemRight>
            </DetailsItem>
            <DetailsItem>
              <DetailsItemLeft>Project Hosted Link:</DetailsItemLeft>
              {currentData?.link ? (
                <a href={currentData?.link} style={{ color: "blue" }}>
                  <DetailsItemRight>{currentData?.link}</DetailsItemRight>
                </a>
              ) : (
                <DetailsItemRight>{currentData?.excuse}</DetailsItemRight>
              )}
            </DetailsItem>
            <DetailsItem>
              <DetailsItemLeft>Project Github Link:</DetailsItemLeft>

              <a href={currentData?.github} style={{ color: "blue" }}>
                <DetailsItemRight>{currentData?.github}</DetailsItemRight>
              </a>
              {currentData?.server && (
                <a href={currentData?.server} style={{ color: "blue" }}>
                  <DetailsItemRight>{currentData?.server}</DetailsItemRight>
                </a>
              )}
            </DetailsItem>
          </BoxDetails>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Projects;
