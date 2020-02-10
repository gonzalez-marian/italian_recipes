import React from 'react';

const Info = props => {
    console.log(props)
    return <div className="wrapper__info">
        <h1 className="wrapper__info--title">{props.recipe.strMeal}</h1>
        <img className="wrapper__info--img" src={props.recipe.strMealThumb} alt={props.recipe.strMeal} />
        <p className="wrapper__info--instructions">{props.recipe.strInstructions}</p>
    </div>
}

export default Info;