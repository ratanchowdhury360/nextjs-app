"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function ContactPage() {
  const router = useRouter();

  const handleDetails = () => {
    router.push("/contact/details");
  };

  return (
    <div className="p-6">
      <p className="font-bold text-2xl mb-4">
        Contact Page
      </p>

      <button
        onClick={handleDetails}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
      >
        See Details
      </button>
    </div>
  );
}