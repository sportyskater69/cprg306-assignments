'use client'
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = async (newItem) => {
        if (!user) return;
        const id = await addItem(user.uid, newItem);
        setItems((lastItems) => [...lastItems, { ...newItem, id }]);
    };

    const handleItemSelect = (item) => {
        let cleanedName = item.name
            .split(",")[0]
            .trim()
            .replace(/[^\p{L}\p{N}\s]/gu, "");

        setSelectedItemName(cleanedName);
    };

    const { user } = useUserAuth();

    useEffect(() => {

        const loadItems = async () => {
            if (!user) return;
            const shoppingList = await getItems(user.uid);
            setItems(shoppingList);
        };

        loadItems();
    }, [user]);



    if (!user) {
        return <p>You must be logged in to view this page.</p>;
    }

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