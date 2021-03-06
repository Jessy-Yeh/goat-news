import Article from "./Article";

function Articles({ articles }) {
  return (
    <>
      {articles.length ? (
        <ul className="articles-container">
          {articles.map((article, index) => (
            <Article article={article} key={index} isMain={index === 0} />
          ))}
        </ul>
      ) : (
        <div className="pageload-view">
          <img src="assets/wait.png" alt="no serarch result" />
          <p>No search result...!</p>
        </div>
      )}
    </>
  );
}

export default Articles;
