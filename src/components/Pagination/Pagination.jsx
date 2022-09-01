import React from "react";
import Pagination from "@mui/material/Pagination";
import "./Pagination.css";

export const AppPagination = ({ pokemonsPerPage, allPokemons, paged }) => {
  let pageNumbers = Math.ceil(allPokemons / pokemonsPerPage);

  return (
    <div>
      <div className="pagination">
        <Pagination
          showFirstButton
          showLastButton
          count={pageNumbers}
          onChange={(e, page) => paged(page)}
          color="primary"
        />
      </div>
    </div>
  );
};
