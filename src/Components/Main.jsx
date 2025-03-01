import { useState } from "react";
import Ingredients from "./Ingredients";
import ShowRecipe from "./ShowRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeMarkdown, setRecipeMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    if (newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    event.currentTarget.reset();
  }

  async function getRecipe() {
    setIsLoading(true);
    try {
      const recipe = await getRecipeFromMistral(ingredients);
      setRecipeMarkdown(recipe);
      setRecipeShown(true);
    } catch (error) {
      console.error("Error getting recipe:", error);
    } finally {
      setIsLoading(false);
    }
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
          isLoading={isLoading}
        />
      )}
      
      {recipeShown && <ShowRecipe recipeMarkdown={recipeMarkdown} />}
    </>
  );
}