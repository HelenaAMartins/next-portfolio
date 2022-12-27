import * as Styled from "./styled";
import menuLinks from "./data.json";
import Link from "next/link";
const Menu = () => {
  return (
    <Styled.MenuList>
      {menuLinks.map(({ name, link, target }) => (
        <Styled.MenuItem key={`menu-${name}`}>
          <Link href={link} target={target}>
            <Styled.MenuLink>{name}</Styled.MenuLink>
          </Link>
        </Styled.MenuItem>
      ))}
    </Styled.MenuList>
  );
};

export default Menu;
