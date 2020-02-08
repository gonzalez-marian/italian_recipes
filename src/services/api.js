const RECIPE = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian'
const SINGLERECIPE = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const fetchRecipe = () => fetch(RECIPE).then(response => response.json());
const fetchSingleRecipe = (id) => fetch(SINGLERECIPE + id).then(response => response.json());

export { fetchRecipe, fetchSingleRecipe };