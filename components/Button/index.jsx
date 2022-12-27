import * as Styled from "./styled";

const Button = ({
  children,
  dark,
  weight,
  small,
  uppercase,
  onClick,
  type,
}) => (
  <Styled.Button
    weight={weight || "200"}
    small={small}
    uppercase={uppercase}
    dark={dark}
    onClick={onClick}
    type={type}
  >
    {children}
  </Styled.Button>
);

export default Button;
