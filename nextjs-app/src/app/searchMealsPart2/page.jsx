 
import React from 'react'
import MealSearchInput from './components/MealSearchInput';
import Image from 'next/image';

export default async function SearchMealsPart2({searchParams}) {
    const query = await searchParams;



 const fetchMeals = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            const data = await response.json();
            return data?.meals || []; // return meals array or empty array if no meals found

            // setMeal(data?.meals || []); // update state

        } catch (error) {
            console.error('Error fetching meals:', error);
            setMeal([]);
        }
    };

    const meals= await fetchMeals();

  return (
        <div>
            <MealSearchInput></MealSearchInput>
            <div className='m-4 p-4 border rounded-lg shadow-md grid grid-cols-3 gap-4 '>
                
                {
                    meals.map(meal => (
                        <div key={meal.idMeal} className='m-4 p-4 border rounded-lg shadow-md '>
                            <h1>{meal.strMeal}</h1>
                            <Image src={meal.strMealThumb} alt={meal.strMeal} className='w-40' width={160} height={160} />
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
