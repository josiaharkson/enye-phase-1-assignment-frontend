import React from "react";
import Pagination from "@material-ui/lab/Pagination";

import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "react-router-dom";

const ListPagination = ({ pageNumber, data, ROWS_PER_PAGE }) => {
  const USER_PATH = "/profiles";
  return (
    <Pagination
      page={Number(pageNumber)}
      count={Math.ceil(data.length / ROWS_PER_PAGE)}
      shape="rounded"
      color="primary"
      showFirstButton
      showLastButton
      boundaryCount={2}
      style={{ padding: 10 }}
      renderItem={item => (
        <PaginationItem
          type={"start-ellipsis"}
          component={Link}
          selected
          to={`${USER_PATH}/${item.page}`}
          {...item}
        />
      )}
    />
  );
};

export default ListPagination;
