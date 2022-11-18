import React from "react";
import RecipeView from "./RecipeView"; //import recipeView component to be used to generate each recipe component in the table
import EditView from "./editView";

function RecipeList({ recipes, handleDelete, handleEdit, editRecipeIdx,handleEditChange,editFormData, handleSave,handleCancel}) {
  //use map on recipes to get all recipe components for each recipe and assign to variable
  //if edit button was clicked then the recipe component that has the same index as the one that was clicked goes into the edit view
  const viewList = recipes.map((recipe, index) => {
    return editRecipeIdx === index ? (
      <EditView key={index} handleEditChange={handleEditChange} editFormData={editFormData} handleSave={handleSave} handleCancel={handleCancel}/>
    ) : (
      <RecipeView
        key={index}
        recipe={recipe}
        handleDelete={handleDelete}
        index={index}
        handleEdit={handleEdit}
      />
    );
  });

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
        <tbody>{viewList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
