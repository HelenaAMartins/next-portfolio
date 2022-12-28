import Container from "../Container";
import Link from "../Link";
import * as Styled from "./styled";

const Breadcrumbs = ({ items }) => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.List>
          {items?.map((item, idx) => (
            <Styled.Item key={`breadcrumb-${idx}`}>
              {items.length - 1 === idx ? (
                <Styled.Name>{item?.breadcrumb}</Styled.Name>
              ) : (
                <Link href={item?.path}>{item.breadcrumb}</Link>
              )}
            </Styled.Item>
          ))}
        </Styled.List>
      </Container>
    </Styled.Wrapper>
  );
};

export default Breadcrumbs;
