import { Recipe } from "@/lib/interfaces/recipe";
import Image from "next/image";

export default function Card({ recipe, className }: { recipe: Recipe; className?: string }) {
    return (
        <article className="border-2 rounded-3xl p-8 shadow-amber-50 shadow-md">
            <header className="justify-items-center">
                <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
                <p className="mb-2">{recipe.mealType}</p>
                <p className={`${recipe.difficulty === "Easy" ? "text-emerald-500" : "text-red-500"} `} >{recipe.difficulty}</p>
            </header>
            <Image src={recipe.image} alt={recipe.name} width={300} height={200} className="my-8 justify-self-center border rounded-3xl" />
            <section className="my-8 justify-self-center">
                <h3 className="font-bold">Ingredients</h3>
                <ul className="list-disc pl-6">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </section>
            <section className="mt-8">
                <h3 className="font-bold">Instructions</h3>
                <p className="text-balance">{recipe.instructions}</p>
            </section>

        </article>
    );

}