function Article({ article }) {
  return (
    <div className="article">
      <img src={article.image} />
      <div className="article-content-container">
        <div className="article-text">
          <h2>
            <a href={article.url}>{article.title}</a>
          </h2>
          <p>{article.description}</p>
        </div>
        <p className="source-name">
          <a href={article.source.url}>{article.source.name}</a>
        </p>
      </div>
    </div>
  );
}

export default Article;
