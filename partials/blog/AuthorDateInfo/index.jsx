import Image from "next/image";
import { maskDate, readingTime } from "../../../utils";
import * as Styled from "./styled";

const AuthorDateInfo = ({ data }) => {
  return (
    <Styled.Wrapper>
      <Styled.Figure>
        <Image
          src="/images/helena-martins.jpg"
          layout="fixed"
          width="50"
          height="50"
        />
      </Styled.Figure>
      <Styled.InfoWrapper>
        <Styled.Author>Helena Martins</Styled.Author>
        <Styled.DateTime>
          Posted on {maskDate(data?.date_created)}
        </Styled.DateTime>
        <Styled.DateTime>in {data?.category?.title}</Styled.DateTime>
        <Styled.DateTime>
          - Reading time: {readingTime(data?.body)}
        </Styled.DateTime>
      </Styled.InfoWrapper>
    </Styled.Wrapper>
  );
};

export default AuthorDateInfo;
