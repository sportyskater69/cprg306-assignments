export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            onClick={onSelect}
            className="mb-3 rounded-lg border border-gray-300 bg-black text-white dark:text-black dark:bg-white p-4 shadow-sm cursor-pointer"
        >
            {name} - {quantity} - {category}
        </li>
    );
}