'use client';
import { useState } from 'react';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState();
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    const productData = { name, category, price, imageUrl:image, description };
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    if (res.ok) {
      setMessage('Product added!');
      setName('');
      setCategory('');
      setPrice('');
      setImage('');
      setDescription('');
    } else {
      setMessage('Failed to add product.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 text-black">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              placeholder="Product Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              name="category"
              placeholder="Category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={e => setImage(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              rows={3}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition-colors duration-200">
            Add Product
          </button>
        </form>
        {message && <div className="mt-5 text-center text-lg font-medium text-green-600">{message}</div>}
      </div>
    </div>
  );
}