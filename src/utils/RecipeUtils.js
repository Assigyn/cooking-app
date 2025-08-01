function getIngredients(recipe)
{
    const ingredientKey = 'strIngredient';
    const measureKey = 'strMeasure';

    if (null === recipe) {
        return null;
    }

    const entries = Object.entries(recipe);
    let results = [];

    entries.forEach(function (data) {
        const key = data[0];
        const value = data[1];
        const ingredientNb = extractNumber(key, ingredientKey);
        const measureNb = extractNumber(key, measureKey);

        if (ingredientNb && '' !== value) {
            if (undefined === results[ingredientNb]) {
                results[ingredientNb] = {ingredient: null, measure: null};
            }

            results[ingredientNb].ingredient = value;
        }

        if (measureNb && '' !== value) {
            if (undefined === results[measureNb]) {
                results[measureNb]= {ingredient: null, measure: null};
            }

            results[measureNb].measure = value;
        }
    })

    return results;
}

function extractNumber(key, replace) {
    if (key.includes(replace)) {
        return key.replace(replace, '');
    }

    return null;
}

export default {
    getIngredients
}