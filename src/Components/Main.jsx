import { useState } from "react";
import Ingredients from "./Ingredients";
import ShowRecipe from "./ShowRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("in gredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);

    event.currentTarget.reset();
  }

    async function getRecipe() {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      console.log(recipeMarkdown);
    }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="ingredient"
          placeholder="eg: chicken"
          required
        />
        <button>+ Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipeShown && <ShowRecipe />}
    </>
  );
}
