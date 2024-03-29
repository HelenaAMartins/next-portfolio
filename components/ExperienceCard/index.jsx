import * as Styled from "./styled";
import Image from "../Image";

const ExperienceCard = ({ data }) => {
  const { date, role, thumbnail, place, link } = data;

  return (
    <Styled.ExperienceWrapper>
      <Styled.Date>{date}</Styled.Date>
      <Styled.Figure height="80" width="80" round>
        <Image
          src={`/images/${thumbnail}`}
          layout="responsive"
          width="80"
          height="80"
        />
      </Styled.Figure>
      <Styled.RolePlaceWrapper>
        <Styled.Role>{role}</Styled.Role>
        <Styled.Place>{place}</Styled.Place>
      </Styled.RolePlaceWrapper>
      <Styled.Link target="_blank" href={link}>
        View website
      </Styled.Link>
    </Styled.ExperienceWrapper>
  );
};

export default ExperienceCard;
