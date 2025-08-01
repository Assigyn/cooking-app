import style from './../assets/style/components/list.module.styl'
import {useEffect, useState} from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard.jsx";

function List({search, filter, category}) {
  const [list, setList] = useState([]);
  const [filteredList, setFiltered] = useState(list);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

    axios.get(url)
        .then((response) => {
          return setList(response.data.meals);
        })

  }, [category]);

  useEffect(() => {
    return setFiltered(list.sort((a, b) => {
      if (a[filter] > b[filter] ) return 1;
      if (a[filter] < b[filter] ) return -1;
      return 0;
    }));
  }, [list, filter]);

  return (
      <div className={style.AppList}>
        {filteredList.map((meal, key) => {return <RecipeCard key={key} recipe={meal} />})}
      </div>
  )
}

export default List
