import Item from "./item.js";
import item from "./items.json";

export default function ItemList() {
    return (
        <ul>
            {item.map((item) =>
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            )}
        </ul>
    );
}