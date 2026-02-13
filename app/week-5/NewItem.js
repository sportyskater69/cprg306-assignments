'use client';

import { useState } from "react";


export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const updateQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const updateName = (event) => {
        setName(event.target.value);
    }
    const updateCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const submissionObject = {
            name,
            quantity,
            category
        }
        console.log(submissionObject);
        alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('Produce');

    }

    return (
        <div className="h-screen flex  justify-center items-center">
            <form onSubmit={handleSubmit} className=" flex flex-col bg-white p-8 w-full max-w-md rounded-2xl shadow-lg border border-gray-200">
                <div className=" w-full mb-10 ">
                    <label>
                        Name:
                        <input type="text"
                            value={name}
                            onChange={updateName}
                            required={true}
                            className="rounded-md border-black border w-full p-1"
                        />
                    </label>
                </div>
                <div className="flex gap-6 mb-6 items-end">
                    <div>
                        <label>
                            Quantity:
                            <input type="number"
                                min="1"
                                max="99"
                                value={quantity}
                                onChange={updateQuantity}
                                className="mr-2 border rounded-md px-3 py-2 h-10"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Category:
                            <select value={category} onChange={updateCategory} className=" border rounded-md px-3 py-2 h-10">
                                <option>Produce</option>
                                <option>Dairy</option>
                                <option>Bakery</option>
                                <option>Meat</option>
                                <option>Frozen Foods</option>
                                <option>Canned Goods</option>
                                <option>Dry Goods</option>
                                <option>Beverages</option>
                                <option>Snacks</option>
                                <option>Household</option>
                                <option>Other</option>
                            </select>
                        </label>
                    </div>
                </div>
                <button type="submit" className="self-start mt-4 text-white px-4 py-1.5 text-sm rounded-md bg-blue-900 hover:bg-blue-700 transition">+</button>
            </form>
        </div>
    );
}