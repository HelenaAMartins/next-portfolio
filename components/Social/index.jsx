import * as Styled from "./styled";
import social from "./data.json";
import { Github, Linkedin, Twitter } from "../../icons";
import { useTheme } from "styled-components";

const Social = () => {
  const {colors} = useTheme()
  const icons = {
    Linkedin: <Linkedin color={colors.warning}/>,
    Github: <Github color={colors.warning}/>,
    Twitter: <Twitter color={colors.warning}/>,
  };

  return (
    <Styled.SocialList>
      {social.map(({ name, link }) => (
        <Styled.SocialItem>
          <Styled.SocialLink target="_blank" rel="noopener noreferrer" href={link}>{icons[name]}</Styled.SocialLink>
        </Styled.SocialItem>
      ))}
    </Styled.SocialList>
  );
};

export default Social;
