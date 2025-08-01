import style from './../assets/style/components/button.module.styl'
import {useEffect} from "react";
import axios from "axios";

function Button({item, setCategory, category}) {
  useEffect(() => {
    const active = document.querySelector(`.${style.AppButton}[data-id="${category}"]`);
    const btns = document.querySelectorAll(`.${style.AppButton}`);

    btns.forEach(function (btn) {
      btn.classList.remove(style.AppButtonActive);
    })

    active.classList.add(style.AppButtonActive);
  }, [category]);

  return (
      <button data-id={item.strCategory} onClick={() => {setCategory(item.strCategory)}} style={{backgroundImage: `url(${item.strCategoryThumb})`}} className={style.AppButton}>
        {item.strCategory}
      </button>
  )
}

export default Button
