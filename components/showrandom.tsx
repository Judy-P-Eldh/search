'use client'
import { useState } from 'react';
import { Recipe } from '@/lib/interfaces/recipe';
import Card from './card';
import { getRandomItems } from '@/lib/utils';

export default function ShowRandom({ recipes }: { recipes: Recipe[] }) {
 const [randomFood, setRandomFood] = useState<Recipe | null>(null);

  function handleClick() {
    const newRandom = getRandomItems(recipes, 1)[0];
    setRandomFood(newRandom);
  }

  return (
    <div className='flex gap-4 flex-col'>
      <button className='border-2 rounded-2xl my-8 p-4 shadow-2xl shadow-amber-200 hover:bg-amber-100 hover:text-black' onClick={handleClick}>Överraska mig</button>
       {randomFood && (
      <div id='randomcard' className=' rounded-3xl shadow-2xl shadow-amber-200' >
      <Card recipe={randomFood} />
      </div>
        )}
    </div>
  );
}