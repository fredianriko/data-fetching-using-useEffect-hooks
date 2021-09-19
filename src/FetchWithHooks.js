import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchWithHooks() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("Redux");
  const [url, setUrl] = useState("https://hn.algolia.com/api/v1/search?query=redux");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  //trigger fetching whenever there are changes to the input form, but start fetching when the search button is clicked

  return (
    <>
      {/* set the query state as the input value */}
      <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      {/* set the search state as the same as the query state */}
      <button type="button" onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>
        Search
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FetchWithHooks;
