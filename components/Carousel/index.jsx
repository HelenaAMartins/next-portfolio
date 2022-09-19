import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Arrow } from "../../icons";
import * as Styled from "./styled";

const ArrowNav = ({ right, ...props }) => {
  return (
    <Styled.ArrowWrapper className={props.className} onClick={props.onClick}>
      <Arrow right={right} />
    </Styled.ArrowWrapper>
  );
};

const Carousel = ({ children, ...props }) => {
  const settings = {
    ...props,
    nextArrow: <ArrowNav right />,
    prevArrow: <ArrowNav />,
  };
  return (
    <Styled.Carousel>
      <Slider {...settings}>{children}</Slider>
    </Styled.Carousel>
  );
};

export default Carousel;
