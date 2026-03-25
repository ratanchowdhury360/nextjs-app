"use client";
import React from "react";

export default function ProductAddForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const description = form.description.value;
        const productData = { productName, price, description };

        // Send the product data to the server
        const response = await fetch("http://localhost:3000/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        });
        const result = await response.json();
        console.log(result);
        form.reset();
        alert("Successfully added product");
        console.log({ productName, price, description });

    };

    return (
        <div>
            <form
                className="flex flex-col gap-4 w-1/2 mx-auto mt-10 bg-red-400 p-6 rounded-lg"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}