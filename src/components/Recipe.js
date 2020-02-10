import React from 'react'

const Recipe = props => {
    return (
        <div className="container">
            <h3 className="container__title">{props.mealName}</h3>
            <img className="container__img" src={props.mealImage} alt={props.mealName}></img>
        </div>
    )
}

export default Recipe;