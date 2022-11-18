import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  //setting state for recipes which will be an array of recipe objs that we get from our original recipe data and the create recipe function 
  const [recipes, setRecipes] = useState(RecipeData);
  //handle a submit button click and adds a new recipe to the current recipe array
  //we are using this as a prop for the recipe create component 
  const createRecipe = (newRecipe) =>
    setRecipes((recipe) => [...recipe, newRecipe]);
  //this state will store which recipeview component we want to edit and switch to the edit view 
  const [editRecipeIdx, setEditRecipeIdx] = useState(null);
  //this state will store the new edited form data from the edit view inputs  
  const [editFormData,setEditFormData] = useState(null)
  //handles the edit button click and sets the edit recipe index state to the index we want to edit 
  const handleEdit = (index) => {
    setEditFormData(recipes[index]); //sets the edit form data to the recipe at the index we want to edit so the current data that is already in the table displays in the input area 
    setEditRecipeIdx(index);
  }
  //handles changes to the edit form and updates the recipe obj with the edits
  const handleEditChange = ({target}) => {
    setEditFormData({...editFormData,[target.name]:target.value})
  }
  //handles the save button click and updates the edits made by iterating through the recipes array and if the index is not the editRecipeidx then it will keep the same data but if it is the editrecipeidx then it will update with the editformdata that has the new edits
  const handleSave = (event) => {
    event.preventDefault();
    setRecipes(recipes.map((recipe,index)=>index !== editRecipeIdx ? recipe : editFormData));
    setEditRecipeIdx(null);
  }
  //handles the cancel button click in the edit view if we dont want to save our changes
  const handleCancel = (event) =>{
  event.preventDefault();
  setEditRecipeIdx(null);
  }
  //handles a delete button click and removes the recipe by the index we what to delete by 
  const handleDelete = (idxToDel) =>
    setRecipes(recipes.filter((recipe, index) => index !== idxToDel));
  
    return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        recipes={recipes}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        editRecipeIdx={editRecipeIdx}
        handleEditChange={handleEditChange}
        editFormData={editFormData}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
      <RecipeCreate
        createRecipe={createRecipe}
      />
    </div>
  );
}

export default App;
