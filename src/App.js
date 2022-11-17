import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData); 
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  //add a recipe to the array using the formData by passing createRecipe as a prop.
  const createRecipe = (newRecipe) => setRecipes((recipe)=>[...recipe,newRecipe])
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const handleDelete = (idxToDel) => setRecipes(recipes.filter((recipe,index) => index !==idxToDel))
  console.log(recipes)
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
