'use client'

import { useState } from "react";
import Item from "./item.js";


export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    const itemsSorted = [...items].sort((x, y) => {
        if (sortBy === "name") {
            return x.name.localeCompare(y.name);
        } else if (sortBy === "category") {
            return x.category.localeCompare(y.category);
        }
        return 0;
    })
    return (
        <div>
            <div className="">
                Sort By:
                <button
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded ml-1 mr-1 mb-1 ${sortBy === "name"
                        ? "bg-blue-700 text-white"
                        : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                        }`}
                >
                    Name
                </button>

                <button
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded ${sortBy === "category"
                        ? "bg-blue-700 text-white"
                        : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                        }`}
                >
                    Category
                </button>
            </div>

            <ul>
                {itemsSorted.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}