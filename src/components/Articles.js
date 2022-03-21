import Article from "./Article";

function Articles({ articles }) {
  return (
    <ul className="articles-container">
      {articles.map((article, index) => (
        <Article article={article} key={index} isMain={index === 0} />
      ))}
    </ul>
  );
}

export default Articles;
