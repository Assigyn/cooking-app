import style from './../assets/style/components/aside.module.styl'
import Filters from "./Filters.jsx";
import List from "./List.jsx";

function Article() {
  return (
      <article>
        <Filters />
        <List />
      </article>
  )
}

export default Article
