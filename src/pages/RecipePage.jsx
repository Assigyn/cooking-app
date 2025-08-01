import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import RecipeUtils from "../utils/RecipeUtils.js";

import styles from "./../assets/style/pages/recipe.module.styl"
import logo from "./../assets/img/logo-light.svg"
import expand from "./../assets/img/Expand_left.svg"

import Subtitle from "../components/SubTitle.jsx";

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
                <button onClick={() => {navigate(`/${recipe.strCategory}`)}}>
                    <img src={expand} alt="expand_icon"/>Back to categories
                </button>
            </div>

            <article className={styles.RecipePageArticle}>
                <div className={styles.RecipePageImg} style={{backgroundImage: `url(${recipe.strMealThumb})`}}></div>
                <h1 className="mb-0 font-playfair text-large">{recipe.strMeal}</h1>

                <div className={styles.RecipePageCategories}>
                    {recipe.strCategory ? <span>category : <b>{recipe.strCategory}</b></span> : null}
                    {recipe.strArea ? <span>area : <b>{recipe.strArea}</b></span> : null}
                </div>

                <Subtitle title="Ingredients" color="yellow" />

                <ul className={styles.AppSubList}>{RecipeUtils.getIngredients(recipe).map((data, key) => {
                    return <li key={key}>{`${data.measure} ${data.ingredient}`}</li>
                })}</ul>

                <Subtitle title="Instructions" color="blue" />

                {instructions.map((paragraph, key) => {
                    return <p key={key}>{paragraph}</p>
                })}
            </article>
        </div>
    )
}

export default RecipePage