import React from 'react';

const Search = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return <div className="wrapper">
        <h1 className="title__list">Italian Recipes</h1>
        <form className="form" >
            <label className="form__label">Search </label>
            <input type="text" onChange={handleChange} name="recipe" value={props.value} placeholder="Ej. Budino Di Ricotta" />
        </form>
    </div>
}

export default Search;