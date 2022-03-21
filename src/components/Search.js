function Search({ setQuery }) {
  const searchItems = (e) => {
    if (e.code === "Enter") {
      setQuery(e.target.value);
    }
  };

  return (
    <div className="search-container">
      <input
        className="search"
        placeholder="search something here..."
        onKeyUp={searchItems}
        autoFocus
      ></input>
      <div className="search-shadow"></div>
      <img className="search-icon" src="assets/search.png" />
    </div>
  );
}

export default Search;
