import { getRedirectError } from "next/dist/client/components/redirect";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <div className="p-6 lg:max-w-6x1 max-w-2xl mx-auto flex align-middle justify-center">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails.name}
              className="w-4x5  rounded object-cover"
            ></img>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text text-slate-600">
              {getRecipeDetails?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <p>{getRecipeDetails?.mealType[0]}</p>
            </div>
            <div className="mt-5">
              <p className="text-l text-slate-600 ">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-slate-600">
                Ingredients
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-slate-700">
                {getRecipeDetails.ingredients.map((item) => (
                  <li key={item.id}> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
