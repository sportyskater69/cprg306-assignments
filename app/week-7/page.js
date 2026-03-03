'use client'
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import item from "./items.json"

export default function Page() {
    const [items, setItems] = useState(item);

    const handleAddItem = (newItem) => {
        setItems((lastItem) => [...lastItem, newItem]);
    };

    return (
        <main className=" bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 transition-colors min-h-screen flex flex-col items-center ">
            <h1 className="text-3xl font-bold text-center">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}