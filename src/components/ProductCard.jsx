// src/app/components/ProductCard.js
'use client';

import Link from 'next/link';
// import Image from 'next/image';

export default function ProductCard({ product, onDelete }) {
  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      onDelete(product.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="relative h-48 w-full">
        {/* <img
          src={product.imageUrl}
          // fill
          className="object-cover"
          // onError={(e) => {
          //   e.target.src = '/images/placeholder.jpg';
          // }}
        /> */}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          {product.category || 'General'}
        </p>

        <p className="text-xl font-bold text-blue-600 mb-4">
          ₹{product.price?.toLocaleString() || '0'}
        </p>

        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors text-center text-sm"
          >
            View Details
          </Link>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}