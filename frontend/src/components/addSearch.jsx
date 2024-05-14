import React from "react";

//This function serve as add handler for search input.
const addSearch = (e, setSearch) =>{
  e.preventDefault();
  setSearch(e.target.value);
}

export default addSearch;