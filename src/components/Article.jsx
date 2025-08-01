import {useEffect, useState} from "react";
import style from "../assets/style/components/article.module.styl";
import RecipeCard from "./RecipeCard.jsx";
import Filters from "./Filters.jsx";
import axios from "axios";

function Article({category}) {
  const [filter, setFilter] = useState('strMeal');
  const [search, setSearch] = useState(null);

  const [list, setList] = useState([]);
  const [filteredList, setFiltered] = useState([]);

  useEffect(() => {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

      axios.get(url)
          .then((response) => {
              return setList(response.data.meals);
          })

  }, [category]);

  useEffect(() => {
      let newList= [...list];

      newList.sort((a, b) => {
          if (a[filter] > b[filter] ) return 1;
          if (a[filter] < b[filter] ) return -1;
          return 0;
      });

      if (null !== search && '' !== search) {
          newList = newList.filter((item) => {return item.strMeal.toLowerCase().includes(search.toLowerCase())})
      }

      return setFiltered(newList);
      }, [list, filter, search]);

  return (
      <article>
          <Filters setSearch={setSearch} setFilter={setFilter}/>

          <div className={style.AppList}>
              {filteredList.map((meal, key) => {
                  return <RecipeCard key={key} recipe={meal}/>
              })}
          </div>
      </article>
  )
}

export default Article
