export default function Page() {
    return (
        <main class="min-h-screen flex flex-col items-center justify-center">
            <h1 class="text-3xl">Shopping List</h1>
            <GroceryItemList />
        </main>
    )
}

import GroceryItemList from "./GroceryItemList"