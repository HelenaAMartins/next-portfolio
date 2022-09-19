import * as Styled from "./styled";

const Button = ({ children, dark, weight, small, uppercase, onClick }) => (
  <Styled.Button
    weight={weight || "200"}
    small={small}
    uppercase={uppercase}
    dark={dark}
    onClick={onClick}
  >
    {children}
  </Styled.Button>
);

export default Button;
