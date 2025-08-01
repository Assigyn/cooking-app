import style from './../assets/style/components/button.module.styl'

function Button({item}) {
  const bg_image = item.strCategoryThumb;

  return (
      <button className={style.AppButton}>{item.strCategory}</button>
  )
}

export default Button
