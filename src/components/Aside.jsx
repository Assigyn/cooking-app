import style from './../assets/style/components/aside.module.styl'
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button.jsx";

function Aside({category, setCategory}) {
  const [menu, setMenu] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => {
                if (200 === response.status) {
                    return setMenu(response.data.categories);
                }
            })
    }, []);

  return (
      <aside className={style.Aside}>
          <h2 className="font-playfair text-large m-0">Categories</h2>
          <div className={style.AsideMenu}>
              {menu.slice(0, 6).map((item, key) => {
                  return <Button key={key} item={item} setCategory={setCategory} category={category}/>
              })}
          </div>
      </aside>
  )
}

export default Aside
