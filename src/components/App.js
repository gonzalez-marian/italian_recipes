import React from 'react';
import '../styles/App.scss';
import { fetchRecipe, fetchSingleRecipe } from '../services/api';
import List from './List';
import Search from './Search';
import Info from './Info';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderRecipeInfo = this.renderRecipeInfo.bind(this);
    this.fetchSingleRecipe = this.fetchSingleRecipe.bind(this);
    this.state = {
      value: '',
      allRecipes: [],
      singleRecipe: {}
    }
  }
  componentDidMount() {
    fetchRecipe()
      .then(recipe => {
        this.setState({
          allRecipes: recipe.meals
        })
      })
  }
  fetchSingleRecipe(id) {
    if (id !== this.state.singleRecipe.idMeal) {
      fetchSingleRecipe(id)
        .then(data => {
          this.setState({
            singleRecipe: data.meals[0]
          })
        })
    }
  }
  handleChange(value) {
    this.setState({
      value: value
    })
  }
  renderRecipeInfo(props) {
    this.fetchSingleRecipe(props.match.params.id);
    return <Info recipe={this.state.singleRecipe} />
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Search handleChange={this.handleChange} />
            <List
              allRecipes={this.state.allRecipes}
              value={this.state.value}
            />
          </Route >
          <Route path="/recipe/:id" render={this.renderRecipeInfo}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;