import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
const initialForm = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients:"",
  preparation:"",
}
const [formData,setFormData] = useState(initialForm)
const handleChange = ({target}) => {
  setFormData({...formData,[target.name] : target.value})
}
const handleSubmit = (event) => {
  event.preventDefault();
  createRecipe(formData);
  setFormData(initialForm);
}
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleChange}
                value={formData.name}
                />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required
                onChange={handleChange}
                value={formData.cuisine}
                />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required
                onChange={handleChange}
                value={formData.photo}
                />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                rows={2}
                required
                onChange={handleChange}
                value={formData.ingredients}
                />
            </td> 
            <td>
            <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                rows={2}
                required
                onChange={handleChange}
                value={formData.preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
