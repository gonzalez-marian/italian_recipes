import React from 'react';

const Info = props => {
    console.log(props)
    return <div className="wrapper__info">
        <h1>{props.recipe.strMeal}</h1>
        <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal} />
        <p>{props.recipe.strInstructions}</p>
    </div>
}

export default Info;