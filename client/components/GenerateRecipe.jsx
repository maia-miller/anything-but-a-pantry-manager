import React from 'react'
import { connect } from 'react-redux'

import Recipe from './Recipe.jsx'


import {getRecipes} from '../actions/generateRecipe'
import {getUserRestrictions} from '../actions/users'

class GenerateRecipe extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      recipeVisible: false,
      noRecipe: null,
      selectedIngredients: null,
      dietaryRestrictions: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  ComponentDidMount() {
    let dietaryRestrictions = getUserRestrictions()
    this.setState({dietaryRestrictions: dietaryRestrictions})
  }

  handleChange(e) {
    this.setState({selectedIngredients: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(getRecipes(this.state.selectedIngredients, this.state.dietaryRestrictions))
    this.setState({recipeVisible: true})
  }

  render(props) {
    return (
      <form onSubmit={this.handleClick}>
          <label>Recipe Search by Ingredients:</label>
          <input type="text" name="i" id="i" onKeyPress={this.handleButtonPress} onChange={this.handleChange} />
        <input type="submit" value="Find Recipe" />
        {this.state.recipeVisible && <Recipe />}

        <div className={this.state.noRecipe ? "show" : "hide"}>
          <p>No recipe found :( </p>
        </div>

        <br/>Powered by <a href="http://www.recipepuppy.com">Recipe Puppy</a>

      </form>
    )
  }
}

const mapStateToProps = (props) => {
  return {
    auth: props.auth,
    recipes: props.recipes
  }
}

export default connect(mapStateToProps)(GenerateRecipe)
