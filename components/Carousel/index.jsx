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
    autoplay: false,
    centerPadding: "20px",
    dots: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
