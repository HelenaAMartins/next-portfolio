import * as Styled from "./styled";
import Image from "../Image";
import Button from "../Button";

const ExperienceCard = ({ data }) => {
  const { thumbnail, title, description, previewLink, repoLink } = data;
  return (
    <Styled.ProjectWrapper>
      <Image src={thumbnail} layout="fixed" width="400" height="400" />
      <Styled.InfoWrapper>
        <Styled.Title>{`${title}`}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Styled.ButtonsWrapper>
          <Button small as="a" href={previewLink} variant="dark">Preview</Button>
          <Button small as="a" href={repoLink}>Code Repo</Button>
        </Styled.ButtonsWrapper>
      </Styled.InfoWrapper>
    </Styled.ProjectWrapper>
  );
};

export default ExperienceCard;
