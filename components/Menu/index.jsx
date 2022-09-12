import * as Styled from "./styled";
import menuLinks from "./data.json";

const Menu = () => {
  return (
    <Styled.MenuList>
      {menuLinks.map(({ name, link, target }) => (
        <Styled.MenuItem>
          <Styled.MenuLink href={link} target={target}>{name}</Styled.MenuLink>
        </Styled.MenuItem>
      ))}
    </Styled.MenuList>
  );
};

export default Menu;
