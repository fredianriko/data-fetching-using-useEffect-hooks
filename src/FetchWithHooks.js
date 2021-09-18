import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchWithHooks() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("Redux");
  const [search, setSearch] = useState("Redux");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${search}`);
      setData(result.data);
      console.log(result);
    };
    fetchData();
  }, [search]);

  //trigger fetching whenever there are changes to the input form, but start fetching when the search button is clicked

  return (
    <>
      <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
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
