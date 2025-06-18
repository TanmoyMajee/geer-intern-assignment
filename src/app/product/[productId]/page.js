import { notFound } from 'next/navigation'

// This is a mock data function - replace with your actual data fetching
async function getProduct(id) {
  // Simulate API call
  const products = {
    '1': { id: 1, name: 'Product 1', price: 99.99, description: 'This is product 1' },
    '2': { id: 2, name: 'Product 2', price: 149.99, description: 'This is product 2' },
  }
  return products[id]
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}