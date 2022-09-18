import * as Styled from "./styled";

const Button = ({ children, variant, weight, small, uppercase }) => {
  return (
    <>
      {variant === "dark" && (
        <Styled.ButtonDark weight={weight || '200'} small={small} uppercase={uppercase}>
          {children}
        </Styled.ButtonDark>
      )}
      {variant === "light" || !variant && (
        <Styled.ButtonLight weight={weight || '200'} small={small}>
          {children}
        </Styled.ButtonLight>
      )}
      {variant === "outlined" && (
        <Styled.ButtonOutlined weight={weight || '200'} small={small}>
          {children}
        </Styled.ButtonOutlined>
      )}
    </>
  );
};

export default Button;
