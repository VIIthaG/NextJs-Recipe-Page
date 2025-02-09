import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiRes = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const result = await apiRes.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function recipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params.details);
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
