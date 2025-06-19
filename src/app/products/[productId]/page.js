// src/app/products/[productId]/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      let id = await params.productId;
      fetchProduct(id);
    };
    getProduct();
  }, [params]);

  const fetchProduct = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          setError('Product not found');
        } else {
          throw new Error('Failed to fetch product');
        }
        return;
      }
      const data = await response.json();
      // console.log(data);
      setProduct(data.product);
      setLoading(false);
    } catch (error) {
      setError('Failed to load product');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete "${product.name}"?`)) {
      try {
        let id = await params.productId;
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('Product deleted successfully!');
          router.push('/products');
        } else {
          throw new Error('Failed to delete product');
        }
      } catch (error) {
        alert('Failed to delete product');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading product...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">{error}</h1>
          <Link
            href="/products"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/products"
          className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
        >
          ← Back to Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full"
            onError={(e) => {
              if (!e.target.src.includes('via.placeholder.com')) {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
              }
            }}
          />
        </div>
        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600">
              {product.category || 'General'}
            </p>
          </div>
          <div className="text-3xl font-bold text-blue-600">
            ₹{product.price?.toLocaleString() || '0'}
          </div>
          {product.description && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          )}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}