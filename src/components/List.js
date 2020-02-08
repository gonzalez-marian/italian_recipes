import React from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';

const List = props => {
    return (
        < div className="wrapper">
            <ul className="list">
                {props.allRecipes
                    .filter(recipe => props.value === '' || recipe.strMeal.toLowerCase().includes(props.value.toLowerCase()))
                    .map(recipe => <li className="item__list" key={recipe.idMeal}>
                        <Link
                            to={`/recipe/${recipe.idMeal}`}
                            className="recipe__btn">
                            <Recipe
                                mealImage={recipe.strMealThumb}
                                mealName={recipe.strMeal}
                                id={recipe.idMeal}
                            />
                        </Link>
                    </li>
                    )}
            </ul>
        </div >
    )
}

export default List;
