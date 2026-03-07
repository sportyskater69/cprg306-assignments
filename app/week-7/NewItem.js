'use client';

import { useState } from "react";


export default function NewItem({ onAddItem }) {
    const [item, setItem] = useState({
        name: "",
        quantity: 1,
        category: "produce",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            ...item,
            id: Math.random().toString(36).substring(2, 9)
        }
        onAddItem(newItem);
        const initialState = { name: "", quantity: 1, category: "produce" };
        setItem(initialState);
    }


    const categories = [
        "Produce",
        "Dairy",
        "Bakery",
        "Meat",
        "Frozen Foods",
        "Canned Goods",
        "Dry Goods",
        "Beverages",
        "Snacks",
        "Household",
        "Other"
    ];

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 transition-colors">
            <form onSubmit={handleSubmit} className="flex flex-col bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 w-full max-w-md rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
                <div className=" w-full mb-10 ">
                    <label htmlFor="name">
                        Name:
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={item.name}
                            onChange={handleChange}
                            required={true}
                            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                </div>
                <div className="flex gap-6 mb-6 items-end">
                    <div>
                        <label htmlFor="quantity">
                            Quantity:
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="1"
                                max="99"
                                value={item.quantity}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="category">
                            Category:
                            <select
                                id="category"
                                name="category"
                                value={item.category}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))} {/*the more programmatic way */}
                            </select>
                        </label>
                    </div>
                </div>
                <button type="submit" className="self-start mt-4 text-white px-4 py-1.5 text-sm rounded-md bg-blue-900 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition">+</button>
            </form>
        </div>
    );
}