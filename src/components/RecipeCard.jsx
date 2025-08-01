import style from './../assets/style/components/recipe.card.module.styl'

function RecipeCard({recipe}) {
    return (
      <div className={style.AppRecipeCard}>
          <div style={{ backgroundImage: `url(${recipe.strMealThumb})`}} className={style.ImgContainer}></div>
          <p className="m-0 text-medium">{recipe.strMeal}</p>
      </div>
  )
}

export default RecipeCard
