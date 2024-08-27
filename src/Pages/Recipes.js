import React from "react";
import "../Global.css";
import data from "../Resources/RecipesInfo.json";

function Recipes() {
  return (
    <div className="RecipeMap">
      <h1>My Favorite Recipes</h1>
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <a href={recipe.link} target="_blank" rel="noreferrer">
              {recipe["image-path"] && (
                <img
                  src={recipe["image-path"]}
                  alt={recipe["alt-text"]}
                  width="100"
                  height="100"
                />
              )}
              <h2>{recipe.title}</h2>
              <p>Total preptime: {recipe.time}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
