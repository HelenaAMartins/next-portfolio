import Image from "next/image";
import * as Styled from "./styled";

const HeroImage = ({ image }) => {
  return (
    <Styled.Hero>
      <Image
        src={`https://gzk9bkt2.directus.app/assets/${image.filename_disk}`}
        layout="fill"
      />
    </Styled.Hero>
  );
};

export default HeroImage;
