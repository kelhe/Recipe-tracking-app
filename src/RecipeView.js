import React from "react";

function RecipeView({recipe,handleDelete,index}){
    return (
    <React.Fragment>
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img style={{objectFit:"scaleDown", width:"100%", height:"100%"}} src={recipe.photo} alt={recipe.name}/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button onClick={()=>handleDelete(index)} name="delete">Delete</button></td>
        </tr>
    </React.Fragment>
    );
}

export default RecipeView