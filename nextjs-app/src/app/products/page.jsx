import React from "react";

export default async function ProductPage() {
  const res = await fetch("http://localhost:3000/api/items",
    {
        cache: "force-cache"
    }

  );

  const data = await res.json();

  return (
    <div>
      {data.data?.map((item) => (
        <div key={item._id} className="border p-4 mb-4">
          <h1>{item.productName || item.name}</h1>
          <p>Price: {item.price}</p>
          <p>{item.description || "No description available"}</p>
        </div>
      ))}
    </div>
  );
}