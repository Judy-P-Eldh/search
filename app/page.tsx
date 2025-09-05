import BasicPagination from "@/components/basicpagination";
import Card from "@/components/card";
import ShowRandom from "@/components/showrandom";
import { fetchAllRecipes } from "@/lib/data/recipes";
import { Recipe } from "@/lib/interfaces/recipe";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  //const currentPage = Number(searchParams.page) || 1;
  const pageStr = searchParams.page;
  const currentPage = Array.isArray(pageStr) ? Number(pageStr[0]) : Number(pageStr) || 1;

  const limit = 8;
  const page = Number(searchParams.page) || 1;
  const skip = (page - 1) * limit;

  const { recipes, total } = await fetchAllRecipes(limit, skip);
  const totalPages = Math.ceil(total / limit);
  // const randomFood = getRandomItems(recipes, 1)[0];

  return (
    <main className="h-dvh p-8">
      <header className="py-20">
        <h1 className="text-xl font-bold justify-self-center">Receptsidan {new Date().toLocaleDateString()}</h1>
      </header>
      <section className="w-sm items-center mx-auto pb-18">
        <h2 className="text-lg font-bold mb-2 text-balance text-center">Överraska dig själv med ett slumpmässigt recept</h2>
        <ShowRandom recipes={recipes} />
      </section>
      <div>
        <BasicPagination currentPage={page} totalPages={totalPages} />
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 content-stretch">
          {recipes.map((recipe: Recipe, index: number) => (
            <Card key={index} recipe={recipe} />
          ))}
        </ul>
      </div>
    </main>
  );
}
