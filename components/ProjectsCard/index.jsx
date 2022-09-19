import * as Styled from "./styled";
import Image from "../Image";
import Button from "../Button";

const ExperienceCard = ({ data }) => {
  const { thumbnail, title, description, previewLink, repoLink } = data;
  return (
    <Styled.ProjectWrapper>
      <Styled.Figure>

      <Image src={thumbnail} layout="responsive" width="400" height="350"/>
      </Styled.Figure>
      <Styled.InfoWrapper>
        <Styled.Title>{`${title}`}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.InfoWrapper>
        <Styled.ButtonsWrapper>
          <a href={previewLink} target="_blank" alt={`click here to see ${title} preview`}>
            <Button small>Preview</Button>
          </a>
          <a href={repoLink} target="_blank" alt={`click here to see ${title} repository`}>
            <Button small dark>
              Code Repo
            </Button>
          </a>
        </Styled.ButtonsWrapper>
    </Styled.ProjectWrapper>
  );
};

export default ExperienceCard;
