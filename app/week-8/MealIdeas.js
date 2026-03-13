"use client";

import { useState, useEffect } from "react";

// Function to fetch meal ideas from the API
async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );

        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMeals() {
            if (!ingredient) {
                setMeals([]);
                return;
            }

            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }

        loadMeals();
    }, [ingredient]);

    return (
        <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>

            {ingredient && (
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Showing meals with: <b>{ingredient}</b>
                </p>
            )}

            {ingredient && meals.length === 0 ? (
                <p className="text-red-500 font-semibold">No meals found.</p>
            ) : (
                <div className="grid gap-4">
                    {meals.map((meal) => (
                        <div
                            key={meal.idMeal}
                            className="flex items-center gap-4 p-4 bg-black dark:bg-white border border-gray-300 dark:border-gray-700 rounded-lg shadow"
                        >
                            <span className="font-medium text-white dark:text-black">
                                {meal.strMeal}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}