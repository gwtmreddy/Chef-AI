// import { config } from "dotenv";
// import { HfInference } from "@huggingface/inference";

// // Load environment variables
// config();

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `;

// // Determine whether to use Vite's env or Node's env based on environment
// const getApiToken = () => {
//   // Check if we're in a Vite environment
//   if (typeof import.meta !== 'undefined' && import.meta.env) {
//     return import.meta.env.VITE_HF_ACCESS_TOKEN;
//   }
//   // Fallback to Node's process.env
//   return process.env.HF_ACCESS_TOKEN;
// };

// const hf = new HfInference(getApiToken());

// export async function getRecipeFromMistral(ingredientsArr) {
//   const ingredientsString = ingredientsArr.join(", ");
//   try {
//     const response = await hf.chatCompletion({
//       model: "mistralai/Mistral-7B-Instruct-v0.2",
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         {
//           role: "user",
//           content:` I have ${ingredientsString}. Please give me a recipe you'd recommend I make!,`
//         },
//       ],
//       max_tokens: 1024,
//     });
//     return response.choices[0].message.content;
//   } catch (err) {
//     console.error(err.message);
//     return "Sorry, I couldn't generate a recipe at this time.";
//   }
// }

// // This block only runs when file is executed directly with Node.js
// if (typeof process !== 'undefined' && process.argv && import.meta.url === file://${process.argv[1]}) {
//   const testIngredients = ["chicken", "rice", "onions", "bell peppers"];
//   console.log(`Testing with ingredients: ${testIngredients.join(", ")}`);
  
//   getRecipeFromMistral(testIngredients)
//     .then(recipe => {
//       console.log("\nGenerated Recipe:");
//       console.log(recipe);
//     })
//     .catch(err => {
//       console.error("Error testing recipe generation:", err);
//     });
// }