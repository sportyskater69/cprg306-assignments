'use client'
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json"

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((lastItem) => [...lastItem, newItem]);
    };

    const handleItemSelect = (item) => {
        let cleanedName = item.name
            .split(",")[0]
            .trim()
            .replace(/[^\p{L}\p{N}\s]/gu, "");

        setSelectedItemName(cleanedName);
    };

    return (
        <main className=" bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 transition-colors min-h-screen flex flex-col items-center m-0 ">
            <h1 className="text-3xl font-bold text-center">
                Shopping List
            </h1>

            <div className="flex gap-10 mt-6">

                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList
                        items={items}
                        onItemSelect={handleItemSelect}
                    />
                </div>

                <div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>

            </div>
        </main>
    );
}