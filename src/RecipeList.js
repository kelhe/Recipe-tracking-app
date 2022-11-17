import React from "react";
import RecipeView from "./RecipeView"; //import recipeView component to be used to generate each recipe component in the table 

function RecipeList({recipes,handleDelete}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  //use map on recipes to get all recipe components for each recipe and assign to variable
  const list = recipes.map((recipe,index)=>(<RecipeView key={index} recipe={recipe} handleDelete={handleDelete} index={index}/>))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
