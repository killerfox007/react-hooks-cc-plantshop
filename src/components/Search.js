import React from "react";

function Search({searching, setSearching, }) {

function handleChange(event){
  setSearching(event.target.value)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searching}
        onChange={handleChange}
        />
    </div>
  );
}

export default Search;
