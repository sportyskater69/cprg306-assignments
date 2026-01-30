export default function Item({ name, quantity, category }) {
    return (
        <li class="rounded-md border border-solid mb-1 p-3">
            {name} - {quantity} - {category}
        </li>
    )
}