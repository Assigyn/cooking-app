import style from './../assets/style/components/recipe.card.module.styl'
import {useNavigate} from "react-router-dom";

function RecipeCard({recipe}) {
    const navigate = useNavigate();

    return (
      <div className={style.AppRecipeCard} onClick={() => navigate(`/recipe/${recipe.idMeal}`)}>
          <div style={{ backgroundImage: `url(${recipe.strMealThumb})`}} className={style.ImgContainer}></div>
          <p className="m-0 text-medium">{recipe.strMeal}</p>
      </div>
  )
}

export default RecipeCard
