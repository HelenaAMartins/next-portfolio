import * as Styled from "./styled";
import social from "./data.json";
import { Github, Linkedin, Twitter } from "../../icons";

const Social = () => {
  const icons = {
    Linkedin: <Linkedin />,
    Github: <Github />,
    Twitter: <Twitter />,
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
