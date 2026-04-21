import React from "react";

function SearchBar({ setSearch }) {
  return (
    <div className="card">
      <h2>Search Notes</h2>
      <input
        placeholder="Search by title, content or tags..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;