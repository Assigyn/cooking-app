import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import styles from "./../assets/style/pages/recipe.module.styl"
import logo from "./../assets/img/logo-light.svg"
import RecipeUtils from "../utils/RecipeUtils.js";

function RecipePage() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => {
                return setRecipe(response.data.meals[0])
            })
    }, []);

    if (null === recipe) {
        return null;
    }

    const instructions = recipe.strInstructions.split(/\n+/);

    return (
        <div>
            <div className={styles.RecipePageHeader}>
                <img src={logo} alt="logo"/>
                <button onClick={() => {navigate(`/${recipe.strCategory}`)}}>Back to categories</button>
            </div>

            <article className={styles.RecipePageArticle}>
                <div className={styles.RecipePageImg} style={{backgroundImage: `url(${recipe.strMealThumb})`}}></div>
                <h1 className="mb-0 font-playfair text-large">{recipe.strMeal}</h1>

                <div className={styles.RecipePageCategories}>
                    {recipe.strCategory ? <span>category : <b>{recipe.strCategory}</b></span> : null}
                    {recipe.strArea ? <span>area : <b>{recipe.strArea}</b></span> : null}
                </div>

                <div className={styles.AppSubTitle}>
                    <span className={`${styles.AppSubTitleSpan} bg-yellow`}></span>
                    <h2 className="m-0">Ingredients</h2>
                </div>

                <ul className={styles.AppSubList}>{RecipeUtils.getIngredients(recipe).map((data, key) => {
                    return <li key={key}>{`${data.measure} ${data.ingredient}`}</li>
                })}</ul>

                <div className={styles.AppSubTitle}>
                    <span className={`${styles.AppSubTitleSpan} bg-blue`}></span>
                    <h2 className="m-0">Instructions</h2>
                </div>

                {instructions.map((paragraph, key) => {
                    return <p key={key}>{paragraph}</p>
                })}
            </article>
        </div>
    )
}

export default RecipePage