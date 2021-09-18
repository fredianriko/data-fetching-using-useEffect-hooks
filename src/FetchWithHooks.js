import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchWithHooks() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("Redux");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${query}`);
      setData(result.data);
      console.log(result);
    };
    fetchData();
  }, [query]);

  return (
    <>
      <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchWithHooks;
