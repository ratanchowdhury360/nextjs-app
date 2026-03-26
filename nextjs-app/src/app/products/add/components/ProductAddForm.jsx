

"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductAddForm() {

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const description = form.description.value;
        const productData = { productName, price, description };

       
            // const response = await fetch("http://localhost:3000/api/items", {
            // const response = await fetch("https://learning-nextjs-eight-swart.vercel.app/api/items", {
            const response = await fetch("https://nextjs-app-three-gray.vercel.app/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });

            const result = await response.json();
            console.log(result);

           form.reset();
            // alert("Successfully added product");
            router.push("/products");
        };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-400 via-pink-400 to-red-400 p-6">
            <form
                className="flex flex-col text-black gap-4 w-full max-w-md bg-white shadow-2xl rounded-xl p-8"
                onSubmit={handleSubmit}
            >


                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-black"
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-black"
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-black"
                />

                <button
                    type="submit"
                    className="mt-4 bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}





// "use client";
// import React from "react";

// export default function ProductAddForm() {

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const form = e.target;
//         const productName = form.productName.value;
//         const price = form.price.value;
//         const description = form.description.value;
//         const productData = { productName, price, description };

//         // Send the product data to the server
//         const response = await fetch("http://localhost:3000/api/items", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(productData)
//         });
//         const result = await response.json();
//         console.log(result);
//         form.reset();
//         alert("Successfully added product");
//         console.log({ productName, price, description });

//     };

//     return (
//         <div>
//             <form
//                 className="flex flex-col gap-4 w-1/2 mx-auto mt-10 bg-red-400 p-6 rounded-lg"
//                 onSubmit={handleSubmit}
//             >
//                 <input
//                     type="text"
//                     name="productName"
//                     placeholder="Product Name"
//                 />
//                 <input
//                     type="number"
//                     name="price"
//                     placeholder="Price"
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Description"
//                 />
//                 <button type="submit">Add Product</button>
//             </form>
//         </div>
//     );
// }