import Filters from "./Filters.jsx";
import List from "./List.jsx";
import {useState} from "react";

function Article({category}) {
  const [filter, setFilter] = useState('name');
  const [search, setSearch] = useState(null);

  return (
      <article>
        <Filters setSearch={setSearch} setFilter={setFilter} />
        <List search={search} filter={filter} category={category} />
      </article>
  )
}

export default Article
