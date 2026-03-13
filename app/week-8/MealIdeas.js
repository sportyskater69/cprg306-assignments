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
        <div>
            <h2>Meal Ideas</h2>

            {ingredient && (
                <p>
                    Showing meals with: <b>{ingredient}</b>
                </p>
            )}

            {ingredient && meals.length === 0 ? (
                <p>No meals found.</p>
            ) : (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}