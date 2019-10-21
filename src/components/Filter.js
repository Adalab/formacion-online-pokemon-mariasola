import React from "react";
import "../stylesheets/Filter.css";

const Filter = props => {
  const { searchByName } = props;
  return (
    <form className="filter_container">
      <input
        onChange={searchByName}
        className="filter_input"
        placeholder="Search pokemon by name"
      ></input>
    </form>
  );
};

export default Filter;
