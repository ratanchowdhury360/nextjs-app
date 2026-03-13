/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import React, { useEffect, useState } from 'react'

export default function Meals() {
    const [meals, setMeal] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMeals = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await response.json();

            setMeal(data?.meals || []); // update state

        } catch (error) {
            console.error('Error fetching meals:', error);
            setMeal([]);
        }
    };

    useEffect(() => {
        fetchMeals();
    }, [search]);

    return (
        <div>
            <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for meals..."
                className="border p-2 rounded-lg w-full mb-4"
            />
            </div>
            <div className='m-4 p-4 border rounded-lg shadow-md grid grid-cols-3 gap-4 '>
                {
                    meals.map(meal => (
                        <div key={meal.idMeal} className='m-4 p-4 border rounded-lg shadow-md '>
                            <h1>{meal.strMeal}</h1>
                            <img src={meal.strMealThumb} alt={meal.strMeal} className='w-40' />
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}