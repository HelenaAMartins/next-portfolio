import NextImage from "next/image";

const Image = ({ src, layout, height, width }) => (
  <NextImage src={src} layout={layout} height={height} width={width} />
);

export default Image;
