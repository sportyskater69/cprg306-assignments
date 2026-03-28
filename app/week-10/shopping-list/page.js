'use client'
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import Link from "next/link";
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

        try {
            const id = await addItem(user.uid, newItem);
            setItems((lastItems) => [...lastItems, { ...newItem, id }]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
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

            try {
                const shoppingList = await getItems(user.uid);
                setItems(shoppingList);
            } catch (error) {
                console.error("Error loading items:", error);
            }
        };

        loadItems();
    }, [user]);


    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p>
                    You are not signed in!
                </p>
                <div>
                    <Link
                        href="/week-10"
                        className="underline text-black dark:text-white"
                    >
                        Back to User Menu
                    </Link>
                </div>
            </div>
        );
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

            <div>
                <Link
                    href="/week-10"
                    className="underline text-black dark:text-white"
                >
                    Back to User Menu
                </Link>
            </div>

        </main>
    );
}