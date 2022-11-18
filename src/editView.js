import React from "react";

function EditView({handleEditChange,editFormData,handleSave,handleCancel}){
    return (
    <tr>
        <td>
            <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
            onChange={handleEditChange}
            value={editFormData.name}
            />
        </td>
        <td>
            <input
            id="cuisine"
            name="cuisine"
            type="text"
            placeholder="Cuisine"
            required
            onChange={handleEditChange}
            value={editFormData.cuisine}
            />
        </td>
        <td>
            <input
            id="photo"
            name="photo"
            type="url"
            placeholder="URL"
            required
            onChange={handleEditChange}
            value={editFormData.photo}
            />
        </td>
        <td>
            <textarea
            id="ingredients"
            name="ingredients"
            placeholder="Ingredients"
            rows={2}
            required
            onChange={handleEditChange}
            value={editFormData.ingredients}
            />
        </td> 
        <td>
        <textarea
            id="preparation"
            name="preparation"
            placeholder="Preparation"
            rows={2}
            required
            onChange={handleEditChange}
            value={editFormData.preparation}
            />
        </td>
        <td>
            <button name="save" onClick={handleSave}>Save</button>
            <br/>
            <button name="cancel" onClick={handleCancel}>Cancel</button>
            </td>
    </tr>
    );
};

export default EditView