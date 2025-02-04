import "./TodoSearch.css";
import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Busca tu ToDo"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}

export { TodoSearch };
