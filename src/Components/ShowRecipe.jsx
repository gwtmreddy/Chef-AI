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
        <button 
          onClick={handlePrint}
          disabled={isPrinting}
          className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
          </svg>
          {isPrinting ? "Preparing..." : "Print Recipe"}
        </button>
      </div>
      
      <div className="recipe-content prose prose-amber max-w-none">
        <ReactMarkdown 
          components={{
            h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-amber-800 mt-6 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-xl font-bold text-amber-700 mt-5 mb-3" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-amber-600 mt-4 mb-2" {...props} />,
            p: ({node, ...props}) => <p className="my-3 text-gray-700" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4 text-gray-700" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4 text-gray-700" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            strong: ({node, ...props}) => <strong className="font-bold text-amber-900" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-amber-300 pl-4 italic my-4" {...props} />
          }}
        >
          {recipeMarkdown}
        </ReactMarkdown>
      </div>
      
      <div className="mt-8 pt-4 border-t border-amber-200 flex justify-between">
        <span className="text-sm text-gray-500">Recipe generated with AI based on your ingredients</span>
        <button 
          className="text-amber-600 hover:text-amber-800 text-sm font-medium transition-colors underline"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
        </button>
      </div>
    </div>
  );
}

ShowRecipe.propTypes = {
  recipeMarkdown: PropTypes.string.isRequired
};