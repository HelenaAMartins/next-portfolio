import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../../../components/Container";
import ProjectsCard from "../../../components/ProjectsCard";
import Title from "../../../components/Title";
import projects from "./data.json";
import * as Styled from "./styled";

const Projects = () => (
  <Styled.Projects>
    <Container>
      <Title
      align="flex-start"
      textAlign="left"
        title="My Projects"
        subtitle="/* I'm always open to discussing about development or partnerships.*/"
      />
      <Styled.Wrapper>
        <Slider
          autoplay={false}
          autoplaySpeed={5000}
          centerPadding="20px"
          dots
          slidesToScroll={3}
          slidesToShow={3}
        >
          {projects.map((item, id) => (
            <ProjectsCard data={item} key={`project-${id}`} />
          ))}
        </Slider>
      </Styled.Wrapper>
    </Container>
  </Styled.Projects>
);

export default Projects;
