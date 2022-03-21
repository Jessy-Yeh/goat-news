function Search({ setQuery }) {
  const searchItems = (e) => {
    if (e.code === "Enter") {
      setQuery(e.target.value);
    }
  };

  return (
    <div className="search-container">
      <input className="search" onKeyUp={searchItems}></input>
      <div className="search-shadow"></div>
      <img className="search-icon" src="assets/search.png" />
    </div>
  );
}

export default Search;
