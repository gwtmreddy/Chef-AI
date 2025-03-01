import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function ShowRecipe({ recipeMarkdown }) {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  return (
    <div className="recipe-container bg-white rounded-lg shadow-lg p-6 my-8 max-w-3xl mx-auto border border-amber-200">
      <div className="flex justify-between items-center mb-6 border-b border-amber-200 pb-4">
        <h2 className="text-2xl font-bold text-amber-800">Your Recipe</h2>
      </div>

      <div className="recipe-content prose prose-amber max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-2xl font-bold text-amber-800 mt-6 mb-4"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-xl font-bold text-amber-700 mt-5 mb-3"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-lg font-semibold text-amber-600 mt-4 mb-2"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="my-3 text-gray-700" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 my-4 text-gray-700" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6 my-4 text-gray-700" {...props} />
            ),
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
            strong: ({ node, ...props }) => (
              <strong className="font-bold text-amber-900" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-amber-300 pl-4 italic my-4"
                {...props}
              />
            ),
          }}
        >
          {recipeMarkdown}
        </ReactMarkdown>
      </div>

      <div className="mt-8 pt-4 border-t border-amber-200 flex justify-between">
        <span className="text-sm text-gray-500">
          Recipe generated with AI based on your ingredients
        </span>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            className="back-to-top-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 5L5 12H10V19H14V12H19L12 5Z" fill="currentColor" />
          </svg>
          Back to top
        </button>
      </div>
    </div>
  );
}

ShowRecipe.propTypes = {
  recipeMarkdown: PropTypes.string.isRequired,
};
