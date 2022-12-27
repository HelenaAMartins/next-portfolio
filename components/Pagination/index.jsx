import { useState } from "react";
import { useRouter } from "next/router";

import * as Styled from "./styled";

const Pagination = ({ items }) => {
  const router = useRouter();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const pageCount = Math.ceil(items / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items;
    setItemOffset(newOffset);
    router.push(`?page=${event.selected + 1}`);
  };

  return (
    <>
      {items > itemsPerPage && (
        <Styled.Wrapper>
          <Styled.PageList
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
          />
        </Styled.Wrapper>
      )}
    </>
  );
};

export default Pagination;
