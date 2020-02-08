import React from 'react'

const Recipe = props => {
    return (
        <div>
            <h3 className="item__name">{props.mealName}</h3>
            <img className="item__image" src={props.mealImage} alt={props.mealName}></img>
        </div>
    )
}

export default Recipe;