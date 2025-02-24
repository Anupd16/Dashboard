import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <p className="text-lg text-gray-800 mb-4">This is the Products Page</p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        Go to Dashboard
      </Link>
    </div>
  );
}
