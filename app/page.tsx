import Card from "@/components/card";
import { fetchAllRecipes } from "@/lib/data/recipes";
import { Recipe } from "@/lib/interfaces/recipe";

export default async function Home() {
  const recipes = (await fetchAllRecipes());
  // console.log(recipes);
  return (
    <main className="h-dvh p-8">
      <header className="py-20">
      <h1 className="text-xl font-bold">Receptsidan {new Date().toLocaleDateString()}</h1>

      </header>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 content-stretch">
        {recipes.map((recipe: Recipe, index: number) => (
          <Card key={index} recipe={recipe} />
        ))}
      </ul>
    </main>
  );
}
