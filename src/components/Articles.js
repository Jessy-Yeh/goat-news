import Article from "./Article";

function Articles({ articles }) {
  return (
    <ul className="articles-container">
      {articles.map((article, index) => (
        <li className="article" key={index}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
}

export default Articles;
