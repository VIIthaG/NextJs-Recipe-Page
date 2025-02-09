import RecipeList from "@/components/recipe-list";

async function fetchListofRecipes() {
  try {
    const apiRes = await fetch("https://dummyjson.com/recipes");
    const result = await apiRes.json();
    return result.recipes;
  } catch (e) {
    throw new Error(e);
  }
}

export default async function Recipes() {
  const recipeList = await fetchListofRecipes();
  return <RecipeList recipeList={recipeList} />;
}
