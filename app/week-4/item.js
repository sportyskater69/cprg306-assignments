export default function Item({ name, quantity, category }) {
    return (
        <li className="mb-3 rounded-lg border border-gray-300 bg-white p-4 shadow-sm ">
            {name} - {quantity} - {category}
        </li>
    );
}