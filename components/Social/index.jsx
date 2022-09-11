import * as Styled from "./styled";
import social from "./data.json";
import { Github, Linkedin, Twitter } from "../../icons";
import { colors } from "../../styles/variables";

const Social = () => {
  const icons = {
    Linkedin: <Linkedin color={colors.purple}/>,
    Github: <Github color={colors.purple}/>,
    Twitter: <Twitter color={colors.purple}/>,
  };

  return (
    <Styled.SocialList>
      {social.map(({ name, link }) => (
        <Styled.SocialItem>
          <Styled.SocialLink href={link}>{icons[name]}</Styled.SocialLink>
        </Styled.SocialItem>
      ))}
    </Styled.SocialList>
  );
};

export default Social;
