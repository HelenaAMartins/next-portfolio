import Carousel from "../../../components/Carousel";
import Container from "../../../components/Container";
import ProjectsCard from "../../../components/ProjectsCard";
import Title from "../../../components/Title";
import * as Styled from "./styled";

const Projects = ({projects}) => (
  <Styled.Projects id="projects">
    <Container>
      <Title
        align="flex-start"
        textAlign="left"
        title="Projects"
        subtitle="/* Access my Github repository for complete projects list. */"
      />
      <Styled.Wrapper>
        <Carousel
          autoplay={false}
          autoplaySpeed={5000}
          centerPadding="20px"
          dots
          slidesToScroll={3}
          slidesToShow={3}
          responsive={[
            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2,
                arrows:false
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows:false
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {projects.map((item, id) => (
            <ProjectsCard data={item} key={`project-${id}`} />
          ))}
        </Carousel>
      </Styled.Wrapper>
    </Container>
  </Styled.Projects>
);

export default Projects;
