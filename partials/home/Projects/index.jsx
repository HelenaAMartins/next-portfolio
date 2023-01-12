import Carousel from "../../../components/Carousel";
import Container from "../../../components/Container";
import ProjectsCard from "../../../components/ProjectsCard";
import Title from "../../../components/Title";
import * as Styled from "./styled";

const Projects = ({ projects }) => (
  <Styled.Projects id="projects">
    <Container>
      <Title
        align="flex-start"
        textAlign="left"
        title="Projects"
        subtitle="/* Access my Github repository for complete projects list. */"
      />
      <Styled.Wrapper>
        <Carousel dots>
          {projects.map((item, id) => (
            <ProjectsCard data={item} key={`project-${id}`} />
          ))}
        </Carousel>
      </Styled.Wrapper>
    </Container>
  </Styled.Projects>
);

export default Projects;
