import { Component, useState } from "react";

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const updateQuantity = () => {
        setQuantity(quantity + 1);
    }

    const updateName = (event) => {
        setName(event.target.value);
    }
    // const updateCategory = () => {}

    const handleSubmit = (event) => {
        event.preventDefault();
        const submissionObject = {
            name,
            quantity,
            category
        }
        console.log(submissionObject);
        alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('');

    }

    return (
        <form >

        </form>
    );
}