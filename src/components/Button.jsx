import style from './../assets/style/components/button.module.styl'

function Button({item, setCategory}) {
  function setActiveMenu(item) {
    const id = item.idCategory
    const active = document.querySelector(`.${style.AppButton}[data-id="${id}"]`);
    const btns = document.querySelectorAll(`.${style.AppButton}`);

    btns.forEach(function (btn) {
      btn.classList.remove(style.AppButtonActive);
    })

    active.classList.add(style.AppButtonActive);

    return setCategory(item.strCategory);
  }

  return (
      <button data-id={item.idCategory} onClick={() => {setActiveMenu(item)}} style={{backgroundImage: `url(${item.strCategoryThumb})`}} className={style.AppButton}>
        {item.strCategory}
      </button>
  )
}

export default Button
