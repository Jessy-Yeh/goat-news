import Header from "./components/Header";
import Search from "./components/Search";
import Articles from "./components/Articles";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${query}&token=790aa44ab9e0476cbc2481efa3b06ad9&lang=en`,
        {
          params: {
            max: 10,
          },
        }
      )
      .then((response) => {
        const articleArray = response.data.articles;
        setArticles(articleArray);
      });
  }, [query]);

  return (
    <>
      <Header />
      <Search setQuery={setQuery} />
      <Articles articles={articles} />
    </>
  );
}

export default App;
