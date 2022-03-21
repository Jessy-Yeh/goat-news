function Article({ article, isMain }) {
  return (
    <li className="article">
      <img src={article.image} />
      <div className="article-content-container">
        <div className="article-text">
          <h2>
            <a href={article.url} target="_blank">
              {article.title}
            </a>
          </h2>
          {isMain ? <p>{article.description}</p> : null}
        </div>
        <p className="source-name">
          <a href={article.source.url}>{article.source.name}</a>
        </p>
      </div>
    </li>
  );
}

export default Article;
