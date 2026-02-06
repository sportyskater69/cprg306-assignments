import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col items-center ">
            <h1 className="text-xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}