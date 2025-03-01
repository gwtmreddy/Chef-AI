import PropTypes from "prop-types";

export default function Ingredients(props) {
  return (
    <section>
      <h2>Ingredients in hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button 
            onClick={props.getRecipe} 
            disabled={props.isLoading}
          >
            {props.isLoading ? "Generating..." : "Get a Recipe"}
          </button>
        </div>
      )}
    </section>
  );
}

// Define prop types for validation
Ingredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  getRecipe: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

Ingredients.defaultProps = {
  isLoading: false
};