import React from 'react';

const Search = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return <div>
        <h1 className="title__list">Mis Recetas</h1>
        <form >
            <label>Buscar </label>
            <input type="text" onChange={handleChange} name="recipe" value={props.value} />
        </form>
    </div>
}

export default Search;